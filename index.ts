import {
  Middleware,
  ParameterizedContext,
  Next
} from 'koa'

import UserAgent from './lib/useragent'

export const userAgent: Middleware  = async (ctx: ParameterizedContext, next: Next): Promise<void> => {
  const originUA = ctx.header['user-agent']
  console.log('ctx', ctx)
  ctx.ua = new UserAgent(originUA)
  await next()
}

export default userAgent