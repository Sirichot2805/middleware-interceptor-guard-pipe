import { CanActivate, ExecutionContext, HttpException, HttpStatus, Injectable, Logger, NestMiddleware, NotFoundException } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Observable } from 'rxjs';
import { RequestService } from 'src/request.service';

@Injectable()
export class AuthenticationMiddleware implements NestMiddleware {
  private readonly logger = new Logger(AuthenticationMiddleware.name);

  constructor(private readonly requestService: RequestService) {}
  use(req: Request, res: Response, next: NextFunction) {
    this.logger.log(AuthenticationMiddleware.name)
    const userId = '123';
    this.requestService.setUserId(userId);
    throw new HttpException('-⚠️⚒️ Under Repairing ⚒️⚠️ -', HttpStatus.SERVICE_UNAVAILABLE);
    next();
  }


}
