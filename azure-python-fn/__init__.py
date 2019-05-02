import logging

import azure.functions as func

def main(req: func.HttpRequest) -> func.HttpResponse:
    try:
        req_body = req.get_json()
    except ValueError:
        pass
    else:
        name = req_body.get('name')

    if not name:
        name = 'World'

    headers = {
        'Access-Control-Allow-Origin': 'https://furikuri.net',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
    return func.HttpResponse(
            f"Hello {name}! From Azure + Python",
            status_code=200,
            headers=headers
    )
