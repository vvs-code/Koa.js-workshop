
var koa = require('koa');

var app = module.exports = koa();

app.use(function* errorHandler(next) {
  try {
    yield next;
  } catch (err) {
    // your error handling logic goes here
    //this.throw('internal server error', 500);
    this.status = err.status || 500;
    this.body = 'internal server error';
    this.app.emit('error', err,  this);
  }
});

app.use(function* (next) {
  throw new Error('boom!');
});
