from typing import TypeVar

T = TypeVar('T')

def str_conversion(value: T) -> str:
  if value == None:
    return ""
  
  if type(value) is bool:
    return str(value).lower()
  
  return str(value)