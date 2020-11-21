const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  //Express middleware in error:
  server.use('/favorites/a', (req, res, nextFunction) => {
    nextFunction(500);
  })

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.use(errorHandler);

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})


function errorHandler(err, req, res, next) {
  console.log("ERROR HANDLER WITH ERROR", err);
  res.status(err);
  return app.render(req, res, '/_error', req.query);
}
