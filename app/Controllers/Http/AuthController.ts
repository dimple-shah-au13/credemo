//import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { HttpContext } from '@adonisjs/http-server/build/standalone';

import { schema, rules } from '@ioc:Adonis/Core/Validator'

import User from "App/Models/User";


const newUserSchema = schema.create({
  email: schema.string({ trim: true }, [
    rules.email()
  ]),
  password: schema.string({ trim: true }, [
    rules.minLength(6), rules.maxLength(10)
  ]),

})



export default class AuthController {

  public async register({ request }) {

    const payload = await request.validate({ schema: newUserSchema })

    const user = await User.create(payload)

    return user;
    console.log(user)

  }



  public async login({ request, auth, response }) {

    const payload = await request.validate({ schema: newUserSchema })

    try {
      const token = await auth.use('api').attempt(payload.email, payload.password, {expiresIn: '7days'})
      return token
    } catch {
      return response.badRequest('Invalid credentials')
    }
    
   
  }


  public async logout({ auth, response }) {

    await auth.use('api').revoke()
    return {
      revoked: true
    }
    response.redirect("/register")
  }



}















    



