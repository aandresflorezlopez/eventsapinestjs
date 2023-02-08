import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

import { AuthGuard } from '../guards/auth.guard';

@Controller('v1/auth')
export class AuthController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  @UseGuards(AuthGuard)
  async login(@Request() req) {
    return req.user;
  }
}
