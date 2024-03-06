import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

  findAll(): string {
    return "This return all users" ;
  }
}