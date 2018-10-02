const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');

require('dotenv').config({ path: 'variables.env' });

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());

  server.get('/', (req, res) => {
    const indexPage = '/';
    app.render(req, res, indexPage, null);
  });
  server.get('*', (req, res) => handle(req, res));
  server.listen(9002, (err) => {
    if (err) throw err;
  });
});
