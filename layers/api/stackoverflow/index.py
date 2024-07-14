from typing import Union
from fetch.get import get
from .types import QuestionsResponse

from .utils import base_url_for, supported_query_params


class StackOverflowApi:
    def __init__(self, key) -> None:
        self.api_key = key

    def fetch_questions(self, query_params: dict) -> Union[QuestionsResponse, None]:

        try:
            api_url_for_questions = base_url_for(params="questions")

            queries = {"key": self.api_key, **query_params}

            questions_resp = get(
                url=api_url_for_questions,
                params=supported_query_params(query_params=queries),
            )

            if questions_resp["status"] == "success":
                return questions_resp["response"]

            return None
        except Exception as e:
            raise e
