# Interesting path:

- http://localhost:3000/favorites/server-error throw an error but Next.js **will render _error.jsx only in production env**
- http://localhost:3000/favorites/throw-error, throw an error from express server and it always renders _error.jsx page
- http://localhost:3000/favorites, send to nextFunction an error; it always renders _error.jsx page
- http://localhost:3000/a, works properly
- http://localhost:3000/b, works properly

# Custom Express Server example

Most of the times the default Next server will be enough but sometimes you want to run your own server to customize routes or other kind of the app behavior. Next provides a [Custom server and routing](https://github.com/vercel/next.js#custom-server-and-routing) so you can customize as much as you want.

Because the Next.js server is just a node.js module you can combine it with any other part of the node.js ecosystem. in this case we are using express to build a custom router on top of Next.

The example shows a server that serves the component living in `pages/a.js` when the route `/b` is requested and `pages/b.js` when the route `/a` is accessed. This is obviously a non-standard routing strategy. You can see how this custom routing is being made inside `server.js`.

