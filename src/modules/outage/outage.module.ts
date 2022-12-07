import { Module } from '@nestjs/common';
import { OutageService } from './outage.service';
import { OutageController } from './outage.controller';

@Module({
  controllers: [OutageController],
  providers: [OutageService],
})
export class OutageModule {}
