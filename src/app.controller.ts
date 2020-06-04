import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {}

  @Get('sender')
  @Render('send')
  rootSender() {}

  @Get('receiver')
  @Render('receive')
  rootReceiver(){}
}
