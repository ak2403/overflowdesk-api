from __future__ import annotations
from typing import Union

from .constants import (
    STACKOVERFLOW_API_BASE_URL,
    STACKOVERFLOW_API_VERSION,
    SUPPORTED_QUERIES,
)


def base_url_for(params: str) -> str:
    return "{}/{}/{}".format(
        STACKOVERFLOW_API_BASE_URL, STACKOVERFLOW_API_VERSION, params
    )


def supported_query_params(query_params: dict[str, Union[str, bool, int]]):
    supported_params = {}

    for key in query_params.keys():
        if key in SUPPORTED_QUERIES:
            supported_params[key] = query_params[key]

    return supported_params
