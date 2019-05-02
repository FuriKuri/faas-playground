module.exports = async function (context, req) {
    var name = 'World';
    if (req.body && req.body.name) {
        name = req.body.name;
    }
    var headers = {};
    headers['Access-Control-Allow-Origin'] = 'https://furikuri.net';
    headers['Access-Control-Allow-Methods'] = 'GET, POST';
    headers['Access-Control-Allow-Headers'] = 'Content-Type';
    context.res = {
        body: 'Hello ' + name + '! From Azure + Node',
        headers: headers
    };  
};