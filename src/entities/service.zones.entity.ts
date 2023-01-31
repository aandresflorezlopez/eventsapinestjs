import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ServiceZones {
  @PrimaryColumn('varchar', { length: 100 })
  key: string;

  @Column()
  name: string;
}
