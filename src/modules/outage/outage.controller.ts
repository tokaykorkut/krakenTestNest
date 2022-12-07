import { Controller } from '@nestjs/common';
import { OutageService } from './outage.service';

@Controller('outage')
export class OutageController {
  constructor(private readonly outageService: OutageService) {}
}
