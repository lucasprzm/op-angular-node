import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Categoria from 'App/Models/Categoria'
import Produto from 'App/Models/Produto'
import Tamanho from 'App/Models/Tamanho'

export default class ProdutosController {
  public async index({}: HttpContextContract) {
    const produtos = await Produto.all()
    return produtos
  }

  public async store({ request }: HttpContextContract) {
    const produto = new Produto()
    produto.nome = request.input('nome')
    produto.preco = request.input('preco')
    produto.quantidade = request.input('quantidade')
    produto.descricao = request.input('descricao')
    produto.categoria_id = request.input('categoria_id')
    produto.tamanho_id = request.input('tamanho_id')

    try {
      await Categoria.findOrFail(produto.categoria_id)
    } catch (error) {
      return 'Categoria do produto não encontrada.'
    }

    try {
      await Tamanho.findOrFail(produto.tamanho_id)
    } catch (error) {
      return 'Tamanho do produto não encontrado.'
    }

    await Produto.create(produto)
    return 'Produto criado com sucesso!'
  }

  public async show({ params }: HttpContextContract) {
    try {
      const id = params.id
      const produto = await Produto.findOrFail(id)
      return produto
    } catch (error) {
      return 'Produto não encontrado.'
    }
  }

  public async update({ params, request }: HttpContextContract) {
    try {
      const id = params.id
      const produto = await Produto.findOrFail(id)
      produto.nome = request.input('nome')
      produto.preco = request.input('preco')
      produto.quantidade = request.input('quantidade')
      produto.descricao = request.input('descricao')
      produto.categoria_id = request.input('categoria_id')
      produto.tamanho_id = request.input('tamanho_id')

      await Categoria.findOrFail(produto.categoria_id)
      await Tamanho.findOrFail(produto.tamanho_id)

      await produto.save()

      return 'Produto atualizado com sucesso!'
    } catch (error) {
      return 'Não foi possível atualizar o produto.'
    }
  }

  public async destroy({ params }: HttpContextContract) {
    try {
      const id = params.id
      const produto = await Produto.findOrFail(id)
      await produto.delete()

      return 'Produto excluído com sucesso!'
    } catch (error) {
      return 'Produto não encontrado.'
    }
  }
}
