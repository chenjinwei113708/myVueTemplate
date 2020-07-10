const koa = require('koa');
const Util = require('../../util/util');

module.exports = {
  /**
   * @param {koa.ParameterizedContext} ctx
   * @param {() => Promise<any>} next
   */
  async test (ctx) {
    Util.resHandler(ctx, {
      isSuccess: true,
      data: {
        msg: 'ok'
      }
    });
  }
}