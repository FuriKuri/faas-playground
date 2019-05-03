exports.handler = async (event) => {
    var name = 'World';
    if (event.body !== null && event.body !== undefined) {
        let body = JSON.parse(event.body)
        if (body.name) 
            name = body.name;
    }
    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/plain',
            'Access-Control-Allow-Origin': 'https://furikuri.net',
            'Access-Control-Allow-Methods': 'GET, POST',
            'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: 'Hello ' + name + '! From AWS + Node',
    };
    return response;
};
