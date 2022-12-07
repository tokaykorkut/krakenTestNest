import { Controller, Get } from '@nestjs/common';
import { OutageDto } from 'src/utils/dtos';
import { OutageService } from './outage.service';

@Controller('outages')
export class OutageController {
    constructor(private readonly outageService: OutageService) {}

    //* get all outages
    @Get()
    async getAllOutages(): Promise<OutageDto[]> {
        return await this.outageService.getAllOutages();
    }
}
