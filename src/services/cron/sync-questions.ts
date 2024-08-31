import { QuestionResponse } from "../../types/services/stackoverflow/question";
import { SyncQuestionsProps } from "../../types/services/cron";
import { StackQuestions } from "../stackoverflow";
import { QuestionsRegistry } from "../../registry/questions-registry";

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

  private async syncWithDatabase(question: QuestionResponse): Promise<void> {
    const questionsRegistry = new QuestionsRegistry();

    const existingQuestion = await questionsRegistry.findById(
      question.question_id
    );

    if (!existingQuestion) {
      questionsRegistry.create(question);

      return;
    }

    if (existingQuestion.lastActivityDate !== question.last_activity_date) {
      await questionsRegistry.update(question);
    }
  }

  async execute() {
    const { items: questions } = await this.fetchQuestions();

    const pushPromises = Promise.allSettled(
      questions.map(this.syncWithDatabase)
    );

    const promisesCompleted = await pushPromises;

    const rejected = promisesCompleted.filter(
      ({ status }) => status === "rejected"
    );

    console.log(rejected);
  }
}
