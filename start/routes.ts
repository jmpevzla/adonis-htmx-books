/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'BooksController.index')

Route.post('/create', 'BooksController.store').as('book.store')

Route.get('/edit-form/:id', 'BooksController.editForm').as('book.edit.form')

Route.delete('/delete/:id', 'BooksController.destroy').as('book.destroy')

Route.get('/row/:id', 'BooksController.row').as('book.row')

Route.put('/update/:id', 'BooksController.update').as('book.update')
