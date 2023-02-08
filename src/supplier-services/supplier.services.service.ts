import { Repository } from 'typeorm';
import { Injectable, Inject } from '@nestjs/common';
import { SupplierServicesList } from '../dtos/supplier.services.list.dto';

import { SuppliersServices } from '../entities/suppliers.services.entity';

@Injectable()
export class SupplierServicesService {
  constructor(
    @Inject('SUPPLIERS_SERVICES_REPOSITORY')
    private suppliersServicesRepository: Repository<SuppliersServices>,
  ) {}

  async findAll(): Promise<SupplierServicesList[]> {
    return this.suppliersServicesRepository.find();
  }
}
