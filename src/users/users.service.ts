import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Users } from '../entities/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private usersRepository: Repository<Users>,
  ) {}

  async findOneByEmail(email: string): Promise<any | undefined> {
    return this.usersRepository.findOneBy({ email });
  }
}
