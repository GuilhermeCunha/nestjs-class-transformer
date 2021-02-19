import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { ExampleClass } from './dto/store.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  store(@Body() dto: ExampleClass): void {
    console.log(dto);
  }
}
