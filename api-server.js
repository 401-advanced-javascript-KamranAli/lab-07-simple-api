const http = require('http');

const office = require('./routes/office');
const routes = {
  office
};

const notFound = (req, res) => {
  res.setHeader('content-type', 'text/html');
  res.statusCode = 404;
  res.end();
};

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  res.statusCode = 200;

  if (req.url.startsWith('/api')) {
    res.setHeader('content-type', 'application/json');

    const handler = routes[resource] || notFound;
    handler(req, res);
  }
  else {
    res.statusCode = 400;
    res.write(JSON.stringify({
      error: 'only /api routes are supported'
    }));
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(
    'http server listening on port',
    PORT
  );
});