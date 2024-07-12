from internals.stackoverflow.constants import (
    STACKOVERFLOW_API_BASE_URL,
    STACKOVERFLOW_API_VERSION,
)
from internals.helpers.convert import str_conversion


def base_url_for(params: str) -> str:
    return "{}/{}/{}".format(
        STACKOVERFLOW_API_BASE_URL, STACKOVERFLOW_API_VERSION, params
    )


def base_url_withkey_for(params: str, key: str) -> str:
    base_url = base_url_for(params=params)

    return "{}?key={}".format(base_url, key)


def append_query_with_url(url: str, query_params: dict) -> str:
    query_params_keys = query_params.keys()
    query_list = []

    for key in query_params_keys:
        query_list.append("{}={}".format(key, str_conversion(value=query_params[key])))

    return "{}?{}".format(url, "&".join(query_list))
