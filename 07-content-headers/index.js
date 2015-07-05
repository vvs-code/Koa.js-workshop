
var koa = require('koa');

var app = module.exports = koa();

app.use(function* () {
  if(this.request.is('text')) {
    this.body = 'ok';
  } else if (this.request.is('json')) {
    this.body = {
      message: 'hi!'
    }
  }
})
