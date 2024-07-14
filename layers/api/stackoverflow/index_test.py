import responses

from ..stackoverflow.index import StackOverflowApi
from fixtures.index import get_fixture

MOCK_STACKOVERFLOW_API_KEY = "12345"

stack_overflow_api = StackOverflowApi(key=MOCK_STACKOVERFLOW_API_KEY)


class TestStackOverflowApiFetchQuestions:

    @responses.activate
    def test_fetch_questions_return_keys(self):
        fixture_response = get_fixture(file_name="questions_fixture.json")

        responses.add(
            responses.GET,
            "https://api.stackexchange.com/2.3/questions?key={}".format(
                MOCK_STACKOVERFLOW_API_KEY
            ),
            json=fixture_response,
            status=200,
        )

        questions_response = stack_overflow_api.fetch_questions()

        assert [*questions_response.keys()] == [
            "items",
            "has_more",
            "quota_max",
            "quota_remaining",
        ]
