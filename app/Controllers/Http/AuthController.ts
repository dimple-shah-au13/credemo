// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import User from "App/Models/User";

export default class AuthController {

    public async login({ auth, request, response }) => {
        const email = request.input('email')
        const password = request.input('password')

        try {
            const token = await auth.use('api').attempt(email, password)
            return token
        } catch {
            return response.badRequest('Invalid credentials')
        }
    }


    public async register({request,response}){
        
        return "REGISTERss users";
    }

    public async logout({request,auth,response}){
        await auth.use('api').revoke()
        return {
            revoked: true
        }
    }

    public async users({ request, response }) => {
        const newUserSchema = schema.create({
          params: schema
            .object()
            .members({
              // ... define schema for your route parameters
            })
          // ... define schema for your body and query string
        })
      
        try {
          const payload = await request.validate({
            schema: newUserSchema
          })
        } catch (error) {
          response.badRequest(error.messages)
        }
      }
      





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


  
  
