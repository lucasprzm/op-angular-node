import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Tamanho from 'App/Models/Tamanho'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await Tamanho.createMany([
      {
        nome: 'P'
      },
      {
        nome: 'M'
      },
      {
        nome: 'G'
      },
      {
        nome: 'GG'
      },
      {
        nome: 'XG'
      },
    ])
  }
}
