export enum Rates {
  INSUFFICIENT = 1,
  MINIMUM = 2,
  SUITABLE = 3,
  PERFECT = 4,
}

import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SuppliersServices } from './suppliers.services.entity';
import { Users } from './users.entity';

@Entity()
export class SupplierRates {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'fk_customer_id' })
  fkCustomerId: Users;

  @ManyToOne(() => SuppliersServices)
  @JoinColumn({ name: 'fk_supplier_service_id' })
  fkSupplierServiceId: SuppliersServices;

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
