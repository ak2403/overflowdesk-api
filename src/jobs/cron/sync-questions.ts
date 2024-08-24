import cron from "node-cron";
import { SyncQuestionsCommand } from "../../services/cron/sync-questions";
import { getStackApiProps } from "../../config";

cron.schedule("*/10 * * * * *", async () => {
  console.log(getStackApiProps());

  const syncQuestionsCommand = new SyncQuestionsCommand({
    api: getStackApiProps(),
  });

  try {
    await syncQuestionsCommand.execute();
  } catch (error) {
    console.log(error);
  }
});
