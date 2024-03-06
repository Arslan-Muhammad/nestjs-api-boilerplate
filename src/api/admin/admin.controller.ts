import { Controller, Get, Post } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller("admin")
export class AdminController {
    constructor(private readonly Admindata: AdminService){};
  @Get()
  findAll(): string {
    return this.Admindata.findAll();
  };
  @Post("post")
  findAll1(): string {
    return "Post Methods";
  }
}