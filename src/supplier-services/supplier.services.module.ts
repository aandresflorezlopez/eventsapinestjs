import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { SupplierServicesController } from './supplier.services.controller';

import { suppliersServicesProvider } from './supplier.services.provider';
import { SupplierServicesService } from './supplier.services.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SupplierServicesController],
  providers: [...suppliersServicesProvider, SupplierServicesService],
})
export class SuppliersServicesModule {}
