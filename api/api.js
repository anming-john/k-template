module.exports = {
  config: {
    open: true,
    cookie: '',
    server: 'http://www.xx.com/'
  },
  request: {
    'get /api/get': ctx => {
      return {
        status: 'ok',
        data: 'get'
      };
    },
    '/api/all': ctx => {
      return {
          status: 'ok',
          data: 'all'
      };
    },
    '/api/json': {json: 111},
    '/api/user/:id': cxt => {
       return {
        status: 'ok',
        user: cxt.params.id,
        query: cxt.query
      };
    }
  }
};
