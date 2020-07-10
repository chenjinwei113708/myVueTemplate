const logger = require('../util/log4js')('server-middleware');
const moment = require('moment');

/**
 * @param {Request} req
 * @param {Response} res
 * @param {*} next
 */
module.exports = function(req, res, next) {
  if (req.url.indexOf('/static/') === 0 || req.url.indexOf('/api/test') === 0) {
    logger.debug(`request: ${req.method} ${req.url}`);
    return next();
  }
  if (req.url.indexOf('/api/') === -1) {
    logger.debug(`request: ${req.method} ${req.url}`);
    return next();
  }
  logger.info("====================request info====================");
  try {
    let ip = ((
      req.headers['x-forwarded-for'] ||
      req.headers['x-forward-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress ||
      req.ip || ''
    )
      .match(/\d+\.\d+\.\d+\.\d+/) || [])[0] || '';
    logger.info('ip:', ip);
  } catch (e) {}
  logger.info('request: ', req.method, req.url);
  logger.info('user-agent: ' + req.headers['user-agent']);
  return next();
}