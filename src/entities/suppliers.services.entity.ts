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

import { Exclude, Expose } from 'class-transformer';

import { SuppliersCategories } from './suppliers.categories.entity';
import { Suppliers } from './suppliers.entity';
import { ServiceZones } from './service.zones.entity';

@Entity()
export class SuppliersServices {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public name: string;

  @Column()
  public description: string;

  @Expose({ name: 'serviceZone' })
  @ManyToOne(() => ServiceZones, { eager: true })
  @JoinColumn({ name: 'fk_service_zone_key' })
  fkServiceZoneKey: ServiceZones;

  @Expose({ name: 'supplier' })
  @ManyToOne(() => Suppliers, { eager: true })
  @JoinColumn({ name: 'fk_supplier_id' })
  fkSupplierId: Suppliers;

  @Expose({ name: 'category' })
  @ManyToOne(() => SuppliersCategories, { eager: true })
  @JoinColumn({ name: 'fk_supplier_category_key' })
  fkCategoryKey: SuppliersCategories;

  @Exclude()
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  public created_at: Date;

  @Exclude()
  @UpdateDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public updated_at: Date;

  @Exclude()
  @DeleteDateColumn({
    type: 'timestamp',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  public deleted_at: Date;
}
