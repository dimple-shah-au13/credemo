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
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
    return "Welcome  to credemo" ;
} )



Route.group(() => {
    Route.get('/user', "AuthController.index");

    Route.get('/user/profile', "ProfilesController.index");
    Route.post('/user/profile', "ProfilesController.store")
    Route.patch('/user/profile', "ProfilesController.update")
    Route.delete('/user/profile', "ProfilesController.destroy")
   
    Route.post('/login', "AuthController.login")
    Route.get('/register', "AuthController.store")
    Route.post('/register', "AuthController.register")
    Route.post('/logout', "AuthController.logout")

})





