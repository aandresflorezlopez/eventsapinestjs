import { Controller, Get, UseGuards } from '@nestjs/common';
import { SupplierServicesService } from '../supplier-services/supplier.services.service';

import { SupplierServicesList } from '../dtos/supplier.services.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@Controller('v1/supplier-services')
export class SupplierServicesController {
  constructor(
    private readonly suppliersServicesService: SupplierServicesService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(): Promise<SupplierServicesList[]> {
    return this.suppliersServicesService.findAll();
  }
}
