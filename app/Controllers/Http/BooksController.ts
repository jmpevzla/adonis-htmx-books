import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Book from '../../Models/Book'

export default class BooksController {
  public async index({ view }: HttpContextContract) {
    const books = await Book.all()
    return view.render('index', { books })
  }

  public async store({ view, request }: HttpContextContract) {
    const book = await Book.create({
      title: request.input('title'),
      author: request.input('author'),
    })

    return view.render('partials/tr-book', { book })
  }

  public async destroy({ request, response }: HttpContextContract) {
    const book = await Book.findOrFail(request.param('id'));
    book.delete();

    return response.ok("")
  }

  public async editForm({ request, view }: HttpContextContract) {
    const book = await Book.findOrFail(request.param('id'));
    return view.render('partials/tr-form', { book });
  }

  public async row({ request, view }: HttpContextContract) {
    const book = await Book.findOrFail(request.param('id'));
    return view.render('partials/tr-book', { book });
  }

  public async update({ view, request }: HttpContextContract) {
    const book = await Book.findOrFail(request.param('id'));
    book.merge({
      title: request.input('title'),
    });
    await book.save();

    return view.render('partials/tr-book', { book })
  }
}
