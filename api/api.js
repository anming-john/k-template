module.exports = {
  config: {
    open: true,
    cookie: '',
    server: 'http://www.xx.com/'
  },
  request: {
    'get /api/get': ctx => {
      ctx.body = {
        status: 'ok',
        data: 'get'
      };
    },
    '/api/all': ctx => {
      ctx.body = {
          status: 'ok',
          data: 'all'
      };
    },
    '/api/json': {json: 111},
    '/api/user/:id': cxt => {
      cxt.body = {
        status: 'ok',
        user: cxt.params.id,
        query: cxt.query
      };
    }
  }
};
