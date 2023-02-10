import { Users } from './users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

import { Exclude } from 'class-transformer';

@Entity()
export class Suppliers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ name: 'logo_path' })
  logoPath: string;

  @Column({ name: 'service_at', type: 'date' })
  serviceAt: string;

  @ManyToOne(() => Users)
  @JoinColumn({ name: 'fk_user_id' })
  fkUsersId: Users;

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
