const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.use('/favorites', (req, res, nextFunction) => {
    if(req.path === "/") {
      nextFunction(500);
    } else {
      nextFunction()
    }
  });

  server.use('/favorites/throw-error', (req, res, nextFunction) => {
    throw "ERROR";
  });

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use(errorHandler);

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


async function errorHandler(err, req, res, next) {
  res.status(503);
  const error = await app.renderToHTML(req, res, '/_error');
  res.send(error);
}
