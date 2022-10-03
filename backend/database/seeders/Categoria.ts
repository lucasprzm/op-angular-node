import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Categoria from 'App/Models/Categoria'

export default class extends BaseSeeder {
  public static developmentOnly = true
  public async run () {
    // Write your database queries inside the run method
    await Categoria.createMany([
      {
        nome: 'Camisas',
      },
      {
        nome: 'Pijamas',
      },
      {
        nome: 'Cuecas',
      },
    ])
  }
}
