const Koa = require('koa');
const { userAgent } = require('../dist/index.js');
console.log('userAgent', userAgent)
console.log('type', typeof userAgent)
const app = new Koa();

app.use(userAgent);
app.use(async ctx => {
  ctx.body = ctx.ua
});

app.listen(3000);