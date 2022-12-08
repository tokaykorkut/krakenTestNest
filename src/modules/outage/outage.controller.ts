import { Controller, Get, UseGuards } from '@nestjs/common';
import { OutageDto } from 'src/utils/dtos';
import { XApiKeyTokenGuard } from 'src/utils/guards/x-api-key-token.guard';
import { OutageService } from './outage.service';

@UseGuards(XApiKeyTokenGuard)
@Controller('outages')
export class OutageController {
    constructor(private readonly outageService: OutageService) {}

    //* get all outages
    @Get()
    async getAllOutages(): Promise<OutageDto[]> {
        return await this.outageService.getAllOutages();
    }
}
