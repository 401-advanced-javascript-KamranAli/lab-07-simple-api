
const get = (req, res) => {
  res.end(JSON.stringify([
    { name: 'Jim Halpert' },
    { name: 'Pam Beesly' },
    { name: 'Creed Bratton' }
  ]));
};

const post = (req, res) => {
  res.end(JSON.stringify(
    { name: 'Jim Halpert' }
  ));
};

const methods = {
  GET: get,
  POST: post
};

module.exports = (req, res) => {
  const handler = methods[req.method];
  handler(req, res);
};