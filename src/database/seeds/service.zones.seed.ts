import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ServiceZones } from '../../entities/service.zones.entity';

export default class CreateServiceZones implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ServiceZones)
      .values([
        { key: 'CO/BOG', name: 'Bogota' },
        { key: 'CO/MED', name: 'Medellin' },
        { key: 'CO/CAL', name: 'Cali' },
        { key: 'CO/BAQ', name: 'Barranquilla' },
        { key: 'CO/SMT', name: 'Santa Marta' },
        { key: 'CO/CTG', name: 'Cartagena' },
      ])
      .execute();
  }
}
