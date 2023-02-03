import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { SuppliersCategories } from '../../entities/suppliers.categories.entity';

export default class CreateSupplierCategories implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(SuppliersCategories)
      .values([
        {
          key: 'music',
          name: 'Musica',
          description: 'Implementos para eventos de música',
        },
        {
          key: 'places',
          name: 'lugares',
          description: 'Lugares para eventos sociales',
        },
        {
          key: 'food',
          name: 'comida',
          description: 'Menus para eventos sociales',
        },
        {
          key: 'ligths',
          name: 'luces',
          description: 'Luces decorativas para eventos sociales',
        },
        {
          key: 'liquor',
          name: 'Licor',
          description: 'Licor en consignación para eventos',
        },
        {
          key: 'transport',
          name: 'transporte',
          description: 'Transporte a cualquier lugar del país',
        },
      ])
      .execute();
  }
}
