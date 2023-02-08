import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';

import { UsersService } from './users.service';
import { usersProvider } from './users.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...usersProvider, UsersService],
  exports: [UsersService],
})
export class UsersModule {}
