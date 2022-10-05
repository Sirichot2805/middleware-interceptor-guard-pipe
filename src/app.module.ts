import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthenticationMiddleware } from './middleware/authentication.middleware';
import { RequestService } from './request.service';
import { MiddlewareControllersService } from './middleware/middleware-controllers.service';
import { MongooseModule } from '@nestjs/mongoose';
require('dotenv').config();

@Module({
  imports: [MongooseModule.forRoot(`${process.env.DB_HOST}/${process.env.DB_DIRECTORY}`)],
  controllers: [AppController],
  providers: [AppService, RequestService, MiddlewareControllersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .exclude({ path: '/cats', method: RequestMethod.POST })
      .forRoutes(
        '*',
        // { path: '/', method: RequestMethod.GET },
        // { path: '/cats', method: RequestMethod.POST },
      );
  }
}
