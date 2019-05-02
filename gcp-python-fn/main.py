def hello_world(request):
    request_json = request.get_json()
    name = 'World'
    if request_json and 'name' in request_json:
        name = request_json['name']
    headers = {
        'Access-Control-Allow-Origin': 'https://furikuri.net',
        'Access-Control-Allow-Methods': 'GET, POST',
        'Access-Control-Allow-Headers': 'Content-Type'
    }
    return ('Hello ' + name + '! From GCP + Python', 200, headers)