import { Users } from 'src/users/users.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';

@Entity()
export class Addresses {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  country: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column({ name: 'complement_address' })
  complementAddress: string;

  @OneToOne(() => Users)
  @JoinColumn({ name: 'fk_user_id' })
  fkUsersId: Users;
}
