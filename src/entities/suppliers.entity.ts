import { Users } from './users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

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

  @OneToOne(() => Users)
  @JoinColumn({ name: 'fk_user_id' })
  fkUsersId: Users;

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
