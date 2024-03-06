import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {

  findAll(): string {
    return "This return all admins" ;
  }
}