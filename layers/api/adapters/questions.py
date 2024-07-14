from stackoverflow.index import StackOverflowApi

default_query_params = {
    "site": "stackoverflow",
    "order": "desc",
    "sort": "activity",
}


class QuestionsAdapter:
    def __init__(self, key: str) -> None:
        self.stackoverflow_api = StackOverflowApi(key=key)

    def fetch_all(self, query_params: dict):

        try:
            questions_resp = self.stackoverflow_api.fetch_questions(
                {**default_query_params, **query_params}
            )

            questions_formatted = []

            for item in questions_resp["items"]:
                questions_formatted.append(
                    {"tags": item["tags"], "owner": item["owner"]}
                )

            return questions_formatted

        except Exception as e:
            raise e
