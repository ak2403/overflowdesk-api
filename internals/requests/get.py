from typing import Dict, TypedDict, Union
import requests

T = TypedDict("T")


class GetResponse(TypedDict):
    status: str
    response: T


def get(url: str, params: Dict[str, Union[str, bool, int]]) -> GetResponse:
    try:
        r = requests.get(url=url, params=params)

        if r.status_code == 200:
            return {"status": "success", "response": r.json()}

        if r.status_code == 204:
            return dict(status="no_content", response=None)

    except ConnectionError:
        return dict(status="connection_error", response=None)

    except Exception as e:
        raise e
