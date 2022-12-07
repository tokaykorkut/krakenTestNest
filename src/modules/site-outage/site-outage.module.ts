import { Module } from '@nestjs/common';
import { SiteOutageService } from './site-outage.service';
import { SiteOutageController } from './site-outage.controller';

@Module({
  controllers: [SiteOutageController],
  providers: [SiteOutageService]
})
export class SiteOutageModule {}
