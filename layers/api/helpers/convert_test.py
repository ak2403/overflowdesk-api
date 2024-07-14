import pytest

from .convert import str_conversion

test_values = [
    (True, "true"),
    (False, "false"),
    (1, "1"),
    ("example", "example"),
    (None, ""),
]


@pytest.mark.parametrize("value,expected", test_values)
def test_str_conversion(value, expected):
    boolean_str = str_conversion(value=value)

    assert boolean_str == expected
