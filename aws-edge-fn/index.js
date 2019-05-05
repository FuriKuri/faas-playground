exports.handler = (event, context, callback) => {
    const request = event.Records[0].cf.request;
    var name = 'World';
    if (request.body.data) {
        const body = Buffer.from(request.body.data, 'base64').toString();
        name = JSON.parse(body).name;
    }

    const response = {
        status: '200',
        statusDescription: 'OK',
        headers: {
            'cache-control': [{
                key: 'Cache-Control',
                value: 'max-age=100'
            }],
            'content-type': [{
                key: 'Content-Type',
                value: 'text/plain'
            }],
            'content-encoding': [{
                key: 'Content-Encoding',
                value: 'UTF-8'
            }],
            'access-control-allow-origin': [{
                key: 'Access-Control-Allow-Origin',
                value: 'https://furikuri.net'
            }],
            'access-control-allow-headers': [{
                key: 'Access-Control-Allow-Headers',
                value: 'Content-Type'
            }],
            'access-control-allow-methods': [{
                key: 'Access-Control-Allow-Methods',
                value: 'GET, POST'
            }]
        },
        body: 'Hello ' + name + '! From AWS + Lambda@Edge',
    };
    callback(null, response);
};