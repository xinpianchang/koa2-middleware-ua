<div align="center">
  <h1>koa2-middleware-ua</h1>
</div>

<p align="center">
  A middleware that generates ua object for every incoming HTTP request in Koa2.
</p>

## How to develop

Using `VSCode` as deafult for *debugger*

```
# Using NPM
npm run example

# Using Yarn
yarn example
```

## How to use
### Installation

```
# Using NPM
$ npm install --save @xpc/koa2-middleware-ua

# Using Yarn
$ yarn add @xpc/koa2-middleware-ua
```



## Usage

Use `@xpc/koa2-middleware-ua` as a middleware for a [koa](https://github.com/koajs/koa) app. By default, it generates a unique uuid (v4) and exposes it on the response via the `X-Request-ID` header. The id is also saved as part of the *ctx.req.id*、*ctx.request.id*、*ctx.id*.

In the following example, the generated uuid is manually exposed on the body for debugging purposes:

```js
const Koa = require('koa');
const { userAgent } = require('@xpc/koa2-middleware-ua');
const app = new Koa();

app.use(userAgent);
app.use(async ctx => {
  ctx.body = ctx.ua;
});

app.listen(3000);
```

打开浏览器访问 http://localhost:3000

```bash
{"_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36"}
```


## API

### ctx.ua 对象包含

```node
{
  _agent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36"
  isIOS: false
  isMobile: false
  isVmovierApp: false
  isWeixin: false
  isXpcApp: false
  xpcAppVersion: null
}
```

## License

Provided under the terms of the MIT License

Copyright © 2020, [xinpianchang](https://www.xinpianchang.com).
