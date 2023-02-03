import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Gender } from '../../entities/gender.entity';

export default class CreateGenders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Gender)
      .values([
        { key: 'feminine', name: 'femenino' },
        { key: 'male', name: 'masculino' },
      ])
      .execute();
  }
}
