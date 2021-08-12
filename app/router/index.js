const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const ctrl = require('../controller');

const getBuildFile = (filename) => {
  let filepath = path.join(__dirname, `../../dist/${filename}`);
  return filepath;
};

const router = new Router();

router.get('/api/test', ctrl.test.test);
router.get('/api/login',ctrl.login.login);

// 放在最后
router.get("*", (ctx, next) => {
  if (ctx.url.indexOf('/api/') === 0) {
    ctx.status = 404;
  } else {
    try {
      let content = fs.readFileSync(getBuildFile('index.html'), 'utf-8');
      ctx.body = content;
    } catch (e) {
      console.log('获取文件失败');
      // ctx.redirect('/');
      ctx.body = 'error';
    }
  }
});

module.exports = router;