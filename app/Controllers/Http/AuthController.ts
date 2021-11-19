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
  }

  public async login({ request, auth }) {
    const payload = await request.validate({ schema: newUserSchema })
    const token = await auth.use('api').attempt(payload.email, payload.password, { expiresIn: '7days' })
    return token;
  }

  public async logout({ auth }) {
    await auth.use('api').revoke()
    return {
      revoked: true
    }
  }
}
