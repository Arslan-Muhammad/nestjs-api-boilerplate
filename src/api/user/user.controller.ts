import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
    constructor(private readonly Userdata: UserService){};
  @Get()
  findAll(): string {
    return this.Userdata.findAll();
  }
}