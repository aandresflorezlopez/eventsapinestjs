import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
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

  @ManyToOne(() => ServiceZones)
  @JoinColumn({ name: 'fk_service_zone_key' })
  fkServiceZoneKey: ServiceZones;

  @ManyToOne(() => Suppliers)
  @JoinColumn({ name: 'fk_supplier_id' })
  fkSupplierId: Suppliers;

  @ManyToOne(() => SuppliersCategories)
  @JoinColumn({ name: 'fk_supplier_category_key' })
  fkCategoryKey: SuppliersCategories;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @DeleteDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public deleted_at: Date;
}
