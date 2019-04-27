exports.helloWorld = (req, res) => {
  let name = req.query.name || req.body.name || 'World';
  res.status(200).send('Hello ' + name + '! From GCP + Node');
};
