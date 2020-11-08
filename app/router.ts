/*
 * @Author: your name
 * @Date: 2020-11-08 15:29:58
 * @LastEditTime: 2020-11-08 16:28:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example-lemon/app/router.ts
 */
import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/news', controller.home.news);
  // 动态路由
  router.get('/newslist/:id', controller.home.newslist);
};
