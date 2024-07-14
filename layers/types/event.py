from __future__ import annotations
from typing import TypedDict, Union


class Event(TypedDict):
    resource: str
    path: str
    httpMethod: str
    headers: dict[str, str]
    queryStringParameters: dict[str, Union[str, int, bool]]
    body: Union[str, dict]
