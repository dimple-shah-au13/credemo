//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HttpContext } from '@adonisjs/http-server/build/standalone';
import Hash from '@ioc:Adonis/Core/Hash';
import { schema, rules } from '@ioc:Adonis/Core/Validator'



import User from "App/Models/User";


export default class AuthController {


  public async index({ request, response }) {
    response.json("register")
  }

  public async store({ request, response }) {
    response.json("register")
  }

  public async register({ request }) {

    const newUserSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email()
      ]),
      password: schema.string({ trim: true }, [
        rules.minLength(6), rules.maxLength(10)
      ]),

    })
    const payload = await request.validate({ schema: newUserSchema })


    //const body = request.body;
    const user = await User.create(payload)

    return user;
    console.log(user)

  }



  public async login({ request, auth, response }) {

    const newUserSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.email()
      ]),
      password: schema.string({ trim: true }, [
        rules.confirmed()
      ]),
      body: schema.string({ escape: true }),
      categories: schema.array().members(schema.number()),
    })

    try {
      const payload = await request.validate({
        schema: newUserSchema
      })
    } catch (error) {
      response.badRequest(error.messages)
    }


    await request.validate(
      new CreateUser({
        email:
          password :
      })
    )










    const body = request.body;
    const {
      email,
      password
    } = body;
    if (!email || !password) {
      return response.json('Please provide email and password!');
    }
    // 2) Check if user exists && password is correct

    const user = await User.findOrFail(1)


    if (!(await Hash.verify(user.password, password))) {
      return response.badRequest('Invalid credentials')
    }

    await auth.use('api').authenticate()
    console.log(auth.use('api').user!)

  }


  public async logout({ auth, response }) {

    await auth.use('api').revoke()
    return {
      revoked: true
    }
    response.redirect("/register")
  }



}









//   public async register({request}){
//     const body = await request.all();

//     const rules = await {
//       email: "required | email |unique:users"
//       password: "required | min: 6"

//     } 

//     const validation = await validate(body,rules) 

// }

    // User.create({
    //   email :request.input("email")
    //   password :request.input("password")

    //   return response.send("created ")


      //const user = new User()

// Assign username and email

//user.email = 'virk@adonisjs.com'

// Insert to the database
//await user.save()



    //   try {
    //     const token = await auth.use('api').attempt(email, password)
    //     return token
    // } catch {
    //     return response.badRequest('Invalid credentials')
    // }





    // public async login({ auth, request, response }) => {
    //     const email = request.input('email')
    //     const password = request.input('password')

        // try {
        //     const token = await auth.use('api').attempt(email, password)
        //     return token
        // } catch {
        //     return response.badRequest('Invalid credentials')
        // }
    // }


    // public async register({request,response}){

    //     return "REGISTERss users";
    // }

    // public async logout({request,auth,response}){
    //     await auth.use('api').revoke()
    //     return {
    //         revoked: true
    //     }
    // }

    // public async user({ request, response }) => {
    //     const newUserSchema = schema.create({
    //       params: schema
    //         .object()
    //         .members({
    //           // ... define schema for your route parameters
    //         })
    //       // ... define schema for your body and query string
    //     })

    //     try {
    //       const payload = await request.validate({
    //         schema: newUserSchema
    //       })
    //     } catch (error) {
    //       response.badRequest(error.messages)
    //     }







// Route.post('login', async ({ auth, request }) => {
//     const email = request.input('email')
//     const password = request.input('password')

//     await auth.use('web').attempt(email, password)
//   })

// Route.get('dashboard', async ({ auth }) => {
//     await auth.use('web').authenticate()

//     // ✅ Request authenticated
//     console.log(auth.user!)
//   })

// Route.post('/logout', async ({ auth, response }) => {
//   await auth.use('web').logout()
//   response.redirect('/login')
// })



// Route.post('/logout', async ({ auth, response }) => {
//   await auth.use('api').revoke()
//   return {
//     revoked: true
//   }
// })




