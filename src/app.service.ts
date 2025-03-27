import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  app.enableCors()
  getHello(): string {
    return 'Hello World!';
  }
}
