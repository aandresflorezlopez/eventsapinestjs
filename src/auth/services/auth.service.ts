import * as md5 from 'md5';

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(username);
    if (!user) {
      return null;
    }

    const { password } = user;
    if (password === md5(pass)) {
      const { ...result } = user;
      return result;
    }
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.uuid };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
