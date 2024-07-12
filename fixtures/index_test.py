from fixtures.index import get_fixture


def test_get_fixture():
    questions = get_fixture(file_name="./questions_fixture.json")

    assert [*questions.keys()] == [
        "items",
        "has_more",
        "quota_max",
        "quota_remaining",
    ]
