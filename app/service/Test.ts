/*
 * @Author: your name
 * @Date: 2020-11-08 15:29:58
 * @LastEditTime: 2020-11-08 15:56:02
 * @LastEditors: your name
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
    return `hi, ${name}`;
  }

}
