import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SupplierServicesService } from '../supplier-services/supplier.services.service';

import { SupplierServicesList } from '../dtos/supplier.services.dto';
import { AuthGuard } from '../auth/guards/auth.guard';

@UseInterceptors(ClassSerializerInterceptor)
@Controller('v1/supplier-services')
export class SupplierServicesController {
  constructor(
    private readonly suppliersServicesService: SupplierServicesService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async findAll(@Query() queryParams: string): Promise<SupplierServicesList[]> {
    const params = new URLSearchParams(queryParams);
    console.log(params);
    return this.suppliersServicesService.findAll();
  }
}
