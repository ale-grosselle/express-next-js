module.exports = {
  basePath: '/favorites',
  serverRuntimeConfig: {},
  publicRuntimeConfig: {
    //workaround: https://github.com/vercel/next.js/issues/7713#issuecomment-706035271
    foo: 'foo',
  },
};
