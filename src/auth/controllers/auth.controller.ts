import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { UsersService } from '../../users/users.service';

import { LocalGuard } from '../guards/auth.local.guard';
import { AuthService } from '../services/auth.service';
@Controller('v1/auth')
export class AuthController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @UseGuards(LocalGuard)
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
