import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'

export default class CategoriasController {
  public async index() {
    const categorias = await Categoria.all();
    return categorias;
  }

  public async show({params}: HttpContextContract) {
    const categoria = await Categoria.find(params.id);
    return categoria;
  }

  public async store({request}: HttpContextContract) {
    const nome = request.input("nome")
    const categoria = await Categoria.create({nome});
    return categoria;
  }

  public async update({params, request}: HttpContextContract) {
    const id = params.id;
    const nome = request.input('nome');
    const categoria = await Categoria.findOrFail(id);

    categoria.nome = nome

    await categoria.save();

    return `Categoria atualizada com sucesso!`
  }

  public async destroy({params}: HttpContextContract) {
    const id = params.id;
    const categoria = await Categoria.findOrFail(id)
    
    await categoria.delete()

    return "Categoria removida com sucesso!"
  }
}
