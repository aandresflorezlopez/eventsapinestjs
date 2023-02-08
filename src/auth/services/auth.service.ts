import * as md5 from 'md5';

import { Injectable } from '@nestjs/common';

import { UsersService } from '../../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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
}
