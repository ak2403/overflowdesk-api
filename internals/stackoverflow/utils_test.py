from internals.stackoverflow.utils import (
    base_url_for,
    base_url_withkey_for,
    append_query_with_url,
)


def test_base_url_for():
    url = base_url_for(params="example")

    assert url == "https://api.stackexchange.com/2.3/example"


def test_base_url_withkey_for():
    url = base_url_withkey_for(params="example", key="sample")

    assert url == "https://api.stackexchange.com/2.3/example?key=sample"


def test_append_query_with_url():
    url = append_query_with_url(
        url=base_url_for(params="example"),
        query_params={"filter": "withBody", "page": 1, "boolean": False},
    )

    assert (
        url
        == "https://api.stackexchange.com/2.3/example?filter=withBody&page=1&boolean=false"
    )
