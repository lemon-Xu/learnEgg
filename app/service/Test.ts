/*
 * @Author: your name
 * @Date: 2020-11-08 15:29:58
 * @LastEditTime: 2020-11-09 08:42:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example-lemon/app/service/Test.ts
 */
import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayHi(name: string) {
    const ctxUser = await this.ctx.service.user.sayUser('lemon');
    console.log(ctxUser);
    const user = await this.service.user.sayUser('lemon2');
    console.log(user);
    return `hi, ${name}`;
  }

}
