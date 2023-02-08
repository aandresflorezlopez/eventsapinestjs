import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { DatabaseModule } from './database/database.module';
import { SuppliersServicesModule } from './supplier-services/supplier.services.module';

@Module({
  imports: [UsersModule, DatabaseModule, SuppliersServicesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
