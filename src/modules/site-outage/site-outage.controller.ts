import { Controller } from '@nestjs/common';
import { SiteOutageService } from './site-outage.service';

@Controller('site-outage')
export class SiteOutageController {
  constructor(private readonly siteOutageService: SiteOutageService) {}
}
