import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    req.time = new Date().toISOString();
    console.log(` ${req.time}, ${req.method}, ${req.originalUrl}`);
    next();
  }
}
