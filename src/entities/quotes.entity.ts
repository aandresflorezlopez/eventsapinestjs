import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { FoodService } from './food.service.entity';

@Entity()
export class Quotes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  total: number;

  @Column()
  identifier: string;

  @Column()
  ip: string;

  @Column()
  seen: boolean;

  @Column({ type: 'json', name: 'service_snapshot' })
  serviceSnapshot: FoodService;

  @Column({ name: 'made_contact' })
  madeContact: boolean;

  @OneToOne(() => FoodService)
  @JoinColumn({ name: 'fk_food_service_id' })
  fkFoodServiceId: FoodService;

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
