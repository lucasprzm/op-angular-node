import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Tamanho from 'App/Models/Tamanho';

export default class TamanhosController {
  public async index() {
    const tamanhos = await Tamanho.all();
    return tamanhos;
  }

  public async show({params}: HttpContextContract) {
    const tamanho = await Tamanho.find(params.id);
    return tamanho;
  }

  public async store({request}: HttpContextContract) {
    const nome = request.input("nome")
    const tamanho = await Tamanho.create({nome});
    return tamanho;
  }

  public async update({params, request}: HttpContextContract) {
    const id = params.id;
    const nome = request.input('nome');
    const tamanho = await Tamanho.findOrFail(id);

    tamanho.nome = nome

    await tamanho.save();

    return `Tamanho atualizada com sucesso!`
  }

  public async destroy({params}: HttpContextContract) {
    const id = params.id;
    const tamanho = await Tamanho.findOrFail(id)
    
    await tamanho.delete()

    return "Tamanho removido com sucesso!"
  }
}
