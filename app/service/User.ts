/*
 * @Author: your name
 * @Date: 2020-11-08 15:29:58
 * @LastEditTime: 2020-11-09 08:30:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /egg-example-lemon/app/service/Test.ts
 */
import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {

  /**
   * sayHi to you
   * @param name - your name
   */
  public async sayUser(name: string) {
    // const user = this.service.user.sayUser('lemon');
    // console.log(user);
    return `user:, ${name}`;
  }

}
