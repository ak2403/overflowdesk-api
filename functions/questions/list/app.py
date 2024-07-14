import json

from event import Event
from adapters.questions import QuestionsAdapter


def lambda_handler(event: Event, context):
    """Sample pure Lambda function

    Parameters
    ----------
    event: dict, required
        API Gateway Lambda Proxy Input Format

        Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format

    context: object, required
        Lambda Context runtime methods and attributes

        Context doc: https://docs.aws.amazon.com/lambda/latest/dg/python-context-object.html

    Returns
    ------
    API Gateway Lambda Proxy Output Format: dict

        Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
    """

    # try:
    #     ip = requests.get("http://checkip.amazonaws.com/")
    # except requests.RequestException as e:
    #     # Send some context about this error to Lambda Logs
    #     print(e)

    #     raise e

    questions_adapter = QuestionsAdapter(key="U4DMV*8nvpm3EOpvf69Rxw((")

    try:
        return {
            "statusCode": 200,
            "body": json.dumps(questions_adapter.fetch_all(query_params={})),
        }
    except Exception as e:
        print(e)

        return {"statusCode": 500, "body": "Internal error"}
