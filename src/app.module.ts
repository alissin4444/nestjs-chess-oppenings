import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OppeningsController } from './oppenings/oppenings.controller';
import { OppeningsService } from './oppenings/oppenings.service';

@Module({
  imports: [],
  controllers: [AppController, OppeningsController],
  providers: [AppService, OppeningsService],
})
export class AppModule {}
