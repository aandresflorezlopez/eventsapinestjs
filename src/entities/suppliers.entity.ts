import { Users } from '../users/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Generated,
  OneToOne,
  JoinColumn,
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
}
