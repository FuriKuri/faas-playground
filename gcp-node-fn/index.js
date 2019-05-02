exports.helloWorld = (req, res) => {
  let name = req.query.name || req.body.name || 'World';
  res.set('Access-Control-Allow-Origin', 'https://furikuri.net');
  res.set('Access-Control-Allow-Methods', 'GET, POST');
  res.set('Access-Control-Allow-Headers', 'Content-Type');
  res.status(200).send('Hello ' + name + '! From GCP + Node');
};
