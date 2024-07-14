import pytest

from layers.api.stackoverflow.utils import base_url_for, supported_query_params


def test_base_url_for():
    url = base_url_for(params="example")

    assert url == "https://api.stackexchange.com/2.3/example"


test_values = [
    ({"key": "12345"}, {"key": "12345"}),
    ({"key": "12345", "page": 1, "total": 123}, {"key": "12345", "page": 1}),
    ({"key": "12345", "not": True}, {"key": "12345"}),
]


@pytest.mark.parametrize("queries,expected", test_values)
def test_supported_query_params(queries, expected):
    queries = supported_query_params(query_params=queries)

    assert queries == expected
