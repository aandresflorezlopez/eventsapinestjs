import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SuppliersServices } from './suppliers.services.entity';

@Entity()
export class FoodService {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ name: 'cook_days' })
  cookDays: string;

  @Column({ name: 'menu_category' })
  menuCategory: string;

  @Column()
  keywords: string;

  @Column({ name: 'pruce_by_user' })
  priceByUser: number;

  @OneToOne(() => SuppliersServices)
  @JoinColumn({ name: 'fk_supplier_service_id' })
  fkSupplierServiceId: SuppliersServices;
}
