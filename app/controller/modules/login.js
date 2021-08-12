const koa = require('koa');
const Util = require('../../util/util');
const Schemas = require('../schemas');
module.exports = {
  /**
   * @param {koa.ParameterizedContext} ctx
   * @param {() => Promise<any>} next
   */
  async login (ctx) {
    // const usermessage
    const data = await Schemas.login.getUsers();
    Util.resHandler(ctx, {
      isSuccess: true,
      data: {
        msg: 'oklogin',
        data,
      }
    });
  }
}