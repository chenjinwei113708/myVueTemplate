const koa = require('koa');
const koaStatic = require('koa-static');
const bodyparser = require('koa-body');
const path = require('path');
const loggerMiddleware = require('./middleware/loggerMiddleware');
const { auth } = require('./middleware/tokenAuth');
const router = require('./router');
const logger = require('./util/log4js')('app.js');
const config = require('../conf');

const app = new koa();
const port = config.network.port;

// 添加中间件
app.use(bodyparser({
  multipart: false, // 支持文件上传
  // formidable: {
  //   uploadDir: path.join(__dirname, '../tmp/upload'),
  //   keepExtensions: true, // 保持文件的后缀
  // }
}));
app.use(koaStatic(
  path.join(__dirname, '../dist')
));
app.use(loggerMiddleware);

// token校验中间件
app.use(auth);

app.use(router.routes());

app.on('error', (err, ctx) => {
  logger.error('server error', err, ctx);
});

app.listen(port, () => {
  logger.info(`Server is starting at port http://localhost:${port}`);
});
