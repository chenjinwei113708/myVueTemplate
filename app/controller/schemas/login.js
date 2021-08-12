const db = require('../../lib/db');
const moment = require('moment');

const USER_TABLE = 'user';
const USER_FLELDS = [
  'id','name','role','username','password','state'
];

module.exports = {
  /**
   * 获取 用户列表
   * @return {Promise<any[]>}
   */
  async getUsers () {
    // const list = await db.createQuery({
    //   query: `
    //     select ${CATEGORY_FIELDS.join(',')}
    //     from ?? 
    //     WHERE pid = 0;
    //   `,
    //   params: [CATEGORY_TABLE_NAME]
    // }).catch(() => Promise.resolve([]));

    const list = await db.createQuery({
      query: `
        select ${USER_FLELDS.join(',')}
        from ?? 
      `,
      params: [USER_TABLE]
    }).catch(() => Promise.resolve([]));

    return list;
  },
}
