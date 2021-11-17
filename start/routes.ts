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
    return "Welcome";
} )

Route.group(() => {
    Route.get('/user', "ProfileController.index");
    Route.get('/user/profile', "ProfileController.store");
    Route.post('/user/profile', "ProfileController.store")
    Route.put('/user/profile', "ProfileController.update")
    Route.delete('/user/profile', "ProfileController.destroy")

    // Route.get('/login', "ProfilesController.create")
    // Route.get('/register', "ProfilesController.show")
    // Route.post('/user', "AuthController.store")
    
    Route.post('/login', "AuthController.login")
    Route.post('/register', "AuthController.register")
    Route.post('/logout', "AuthController.index")

})

// Route.get('/posts/:postID', async ({params, request,response}) => {
//   request.body();
//   response.status(200);
//   return "I am string !!!" + params.postID;
// })


