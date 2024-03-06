import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller()
export class DashboardController {
    constructor(private readonly Dashboarddata: DashboardService){};
  @Get()
  findAll(): string {
    return this.Dashboarddata.findAll();
  };
}