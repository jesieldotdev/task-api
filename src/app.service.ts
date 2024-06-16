import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const routes = ['tasks'];
    let res = '';
    routes.map((item) => (res += `<a href='/${item}'>/${item}</a></br>`));
    return res;
  }
}
