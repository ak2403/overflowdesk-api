import json
import os

dirname = os.path.dirname(__file__)


def get_fixture(file_name: str):
    relative_filename = os.path.join(dirname, file_name)

    with open(relative_filename) as f:

        data = json.load(f)

        return data
