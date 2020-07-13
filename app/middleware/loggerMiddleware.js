const koa = require('koa');
const logger = require('../util/log4js')('server-middleware');
/**
 * @param {koa.ParameterizedContext} ctx
 * @param {() => Promise<any>} next
 * @return {Promise<any>}
 */
module.exports = async function(ctx, next) {
  if (ctx.path.indexOf('/static/') === 0 ||  /\/graphql$/g.test(ctx.headers['referer']) || ctx.path.indexOf('/api/test') === 0) {
    console.log(`request: ${ctx.method} ${ctx.path}`);
    return next();
  }
  if (ctx.path.indexOf('/api/') === -1) {
    console.log(`request: ${ctx.method} ${ctx.path}`);
    return next();
  }
  logger.info("====================request info====================")
  logger.info('request: ', ctx.method, ctx.path);
  logger.info('username: ', ctx.cookies.get('z_username'));
  logger.info('ip: ', ctx.ip);
  logger.info('referer: ',ctx.headers['referer']);
  logger.info('user-agent: ' + ctx.headers['user-agent']);
  if (ctx.method.toLowerCase() === 'get') {
    logger.info("query: ", ctx.search);
  } else if (ctx.path !== '/api/login') {
    logger.info("body: ", ctx.request.body);
  }
  return next();
}