import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { SuppliersCategories } from './suppliers.categories.entity';
import { Suppliers } from './suppliers.entity';
import { ServiceZones } from './service.zones.entity';

@Entity()
export class SuppliersServices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToOne(() => ServiceZones)
  @JoinColumn({ name: 'fk_service_zone_key' })
  fkServiceZoneKey: ServiceZones;

  @OneToOne(() => Suppliers)
  @JoinColumn({ name: 'fk_supplier_id' })
  fkSupplierId: Suppliers;

  @OneToOne(() => SuppliersCategories)
  @JoinColumn({ name: 'fk_supplier_category_key' })
  fkCategoryKey: SuppliersCategories;
}
