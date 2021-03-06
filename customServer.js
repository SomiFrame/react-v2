// This file doesn't not go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const customRouter = require('./customRouter')
app.prepare().then(() => {
  createServer((req, res) => {
    console.log(req.url)
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true)
    const { pathname, query } = parsedUrl

    if (customRouter[pathname]) {
      app.render(req, res, customRouter[pathname], query)
    } else {
      handle(req,res,parsedUrl)
    }
    // if (pathname === '/') {
    //   app.render(req, res, '/portal/guess', query)
    // } else if (pathname === '/b') {
    //   app.render(req, res, '/a', query)
    // } else {
    //   handle(req, res, parsedUrl)
    // }
  }).listen(3000, err => {
    console.log('error',err)
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})