// 检查用户会话
const koa = require('koa');
const Util = require("../util/util"); //用来返回抽取的
const logger = require("../util/log4js")("tokenAuth");

const whiteList = ['/api/login', '/api/logout', '/api/test'];

// if (process.env.NODE_ENV === "development") {
//   whiteList.push('/api/upload');
// }

module.exports = {
  /**
   * 用户token验证
   * @param {koa.ParameterizedContext} ctx
   * @param {() => Promise<any>} next
   */
  async auth(ctx, next) {
    if (whiteList.indexOf(ctx.url) > -1 || (ctx.url !== '/graphql' && ctx.url.indexOf('/api') !== 0)) {
      return next();
    }

    //检查cookie或者post的信息或者url查询参数或者头信息
    let token =
      ctx.cookies.get('token') ||
      ctx.request.body.token ||
      ctx.query.token ||
      ctx.headers["x-access-token"];
    let username = ctx.cookies.get('username');

    // 解析 token
    return next();
  },
};
