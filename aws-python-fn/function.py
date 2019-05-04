import json

def lambda_handler(event, context):
    try:
        name = json.loads(event['body'])['name']
    except:
        name = 'World'

    if not name:
        name = 'World'

    headers = {
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'https://furikuri.net',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    }

    return {
        'statusCode': 200,
        'headers': headers,
        'body': 'Hello ' + name + '! From AWS + Python'
    }
