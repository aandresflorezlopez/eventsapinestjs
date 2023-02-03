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
import { Suppliers } from './suppliers.entity';

@Entity()
export class SupplierShowcase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  keywords: string;

  @Column({ name: 'did_at', type: 'date' })
  didAt: string;

  @ManyToOne(() => Suppliers)
  @JoinColumn({ name: 'fk_supplier_id' })
  fkSupplierId: Suppliers;

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
