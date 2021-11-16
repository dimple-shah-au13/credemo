// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
    public async index(){
        return "GET Users";
    }

    public async create(){
        return "POST users";
    }

    public async store(){
        return "POST users";
    }

    public async show({view}){
        return view.render("users");
    }

    public async edit(){
        return "POST users";
    }

    public async update(){
        return "POST users";
    }

    public async destroy(){
        return "POST users";
    }
}
