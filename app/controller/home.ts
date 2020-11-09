/*
 * @Author: your name
 * @Date: 2020-11-08 15:29:58
 * @LastEditTime: 2020-11-09 08:38:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example-lemon/app/controller/home.ts
 */
import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }

  public async news() {
    const { ctx } = this;
    const { query } = ctx;
    console.log('news获得get传值');
    console.log(query);
    ctx.body = await ctx.service.test.sayHi('news');
  }

  // 获得动态路由传递值
  public async newslist() {
    const { ctx } = this;
    const { params } = ctx;
    const { id } = params;
    console.log(params);
    ctx.body = await ctx.service.test.sayHi(`newslist:${id}`);
    // ctx.body = await ctx.service.test.sayHi('news');
  }
}
