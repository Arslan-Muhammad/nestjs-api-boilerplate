import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {

  findAll(): string {
    return "This is dashboard" ;
  }
}