import { Injectable, Logger } from '@nestjs/common';
import { RequestService } from './request.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly reqestService: RequestService) {}
  getHello(): string {
    const userId = this.reqestService.getUserId();
    this.logger.log('getHello userId', userId);
    return 'Hello World!';
  }
}
