import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ServiceZones } from '../../entities/service.zones.entity';

export default class CreateGenders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ServiceZones)
      .values([
        { name: 'CO/BOG' },
        { name: 'CO/MED' },
        { name: 'CO/CAL' },
        { name: 'CO/BAQ' },
        { name: 'CO/SMT' },
        { name: 'CO/CTG' },
      ])
      .execute();
  }
}
