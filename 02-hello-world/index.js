
var koa = require('koa');

var app = module.exports = koa();

/**
 * Return "hello world" as a string on every request.
 * Hint: this only requires a single line of code.
 */

app.use(function* () {
  this.body = 'Hello World';
});

app.listen(3000);
