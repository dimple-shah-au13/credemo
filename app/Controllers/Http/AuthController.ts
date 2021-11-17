// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthController {

    public async store(){
        return "POST users";
    }

    public async show({view}){
        return view.render("users");
    }

    public async update(){
        return "POST users";
    }

    public async destroy(){
        return "POST users";
    }
}
