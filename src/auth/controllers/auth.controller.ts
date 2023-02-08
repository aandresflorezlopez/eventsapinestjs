import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

import { LocalGuard } from '../guards/auth.local.guard';
@Controller('v1/auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Request() req) {
    return req.user;
  }
}
