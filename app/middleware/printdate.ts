/*
 * @Author: your name
 * @Date: 2020-11-11 08:46:15
 * @LastEditTime: 2020-11-11 09:04:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example-lemon/app/middleware/printdate.ts
 */
export default (options, app) => {
  return async function responseTime(ctx, next) {
    console.log(options, app);
    const start = Date.now();
    // 注意，和 generator function 格式的中间件不同，此时 next 是一个方法，必须要调用它
    await next();
    const delta = Math.ceil(Date.now() - start);
    console.log(Date.now());
    ctx.set('X-Response-Time', delta + 'ms');
  };
};
