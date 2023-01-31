import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class SuppliersCategories {
  @PrimaryColumn('varchar', { length: 100 })
  key: string;

  @Column()
  name: string;

  @Column()
  description: string;
}
