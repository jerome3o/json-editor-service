import json
from urllib.parse import quote
from pprint import pprint
from base64 import encodebytes
from dataclasses import dataclass
from dataclasses_jsonschema import JsonSchemaMixin
from enum import Enum
from typing import List
import webbrowser

class ConfigEnum:
    ENUM_VALUE_1 = "value_1"
    ENUM_VALUE_2 = "value_2"
    ENUM_VALUE_3 = "value_3"



@dataclass
class SubSubConfig(JsonSchemaMixin):
    "The sub sub config"
    sub_int: int


@dataclass
class SubConfig(JsonSchemaMixin):
    "The sub config"
    int_prop: int
    str_prop: str
    bool_prop: bool
    sub_sub_config_property: SubSubConfig

    int_prop_with_default: int = 4
    str_prop_with_default: str = "default_string_value"
    bool_prop_with_default: bool = True



@dataclass
class Config(JsonSchemaMixin):
    "The main config"
    single_enum: ConfigEnum
    many_enum: List[ConfigEnum]
    
    object_prop: SubConfig
    object_list_prop: List[SubConfig]


def generate_url(schema: dict, host="localhost:3000"):
    json_string = json.dumps({"schema": schema})
    b64_string = encodebytes(json_string.encode("utf-8")).decode("utf-8")
    url_param = quote(b64_string)
    return f'http://{host}/edit/{url_param}'


def main():
    schema = Config.json_schema()
    pprint(schema)
    url = generate_url(schema)
    print(url)
    webbrowser.open_new_tab(url)


if __name__ == "__main__":
    main()