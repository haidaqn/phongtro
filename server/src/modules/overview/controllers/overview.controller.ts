import { Controller, Get } from '@nestjs/common';
import { OverviewService } from '../services/overview.service';

@Controller('overview')
export class OverviewController {
    constructor(private readonly overviewService: OverviewService) {}

    @Get()
    async getAll() {
        return await this.overviewService.getAll();
    }
}
