from __future__ import annotations
from typing import TypedDict


class Owner(TypedDict):
    account_id: int
    reputation: int
    user_id: int
    user_type: str
    profile_image: str
    display_name: str
    link: str


class ResponseItem(TypedDict):
    tags: list[str]
    owner: Owner
    is_answered: bool
    view_count: int
    answer_count: int
    score: int
    last_activity_date: int
    creation_date: int
    question_id: int
    link: str
    title: str


class QuestionsResponse(TypedDict):
    items: list[ResponseItem]
    has_more: bool
    quota_max: int
    quota_remaining: int
