import { DataSource } from 'typeorm';
import { SuppliersServices } from '../entities/suppliers.services.entity';

export const suppliersServicesProvider = [
  {
    provide: 'SUPPLIERS_SERVICES_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(SuppliersServices),
    inject: ['DATA_SOURCE'],
  },
];
