import { StackQuestionMapper } from "../../mappers/stack-question-mapper";
import { QuestionsRepository } from "../../repositories/questions";
import { StackQuestion } from "../../types/mappers/stack-question";
import { StackOverflowQuestion } from "../../types/models/stackoverflow";
import { SyncQuestionsProps } from "../../types/services/cron";
import { StackQuestions } from "../stackoverflow";

export class SyncQuestionsCommand {
  private apiProps: SyncQuestionsProps;

  constructor(props: SyncQuestionsProps) {
    this.apiProps = props;
  }

  private async fetchQuestions() {
    const stackQuestions = new StackQuestions(this.apiProps.api.url);

    return await stackQuestions.list({
      key: this.apiProps.api.key,
      site: "stackoverflow",
      filter: "!)Rm-Ag_bM8czQSUgu9fUABXh",
    });
  }

  private transformQuestions(
    questions: StackOverflowQuestion[]
  ): StackQuestion[] {
    return questions.map((question) => StackQuestionMapper.transform(question));
  }

  private async syncWithDatabase(question: StackQuestion): Promise<void> {
    const questionsRepository = new QuestionsRepository();

    const existed = await questionsRepository.find(String(question.id));

    if (!existed) {
      questionsRepository.push(question);

      return;
    }

    if (existed.lastActivityDate !== question.lastActivityDate) {
      await questionsRepository.update(question);
    }
  }

  async execute() {
    const questions = await this.fetchQuestions();

    console.log("fetched questiosn");
    const transformed = this.transformQuestions(questions.items);

    console.log("Transformed questiosn");

    const pushPromises = Promise.allSettled(
      transformed.map(this.syncWithDatabase)
    );

    const promisesCompleted = await pushPromises;

    const rejected = promisesCompleted.filter(
      ({ status }) => status === "rejected"
    );

    console.log(rejected);
  }
}
