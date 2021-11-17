// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ProfilesController {
    public async index(){
        return "GET Profiles";
    }
    
    public async store(){
        return "POST users";
    }

    public async login({request,response}){
        return "LOGIN users";
    }

    public async register({request,response}){
        return "REGISTER users";
    }

    public async logout({request,response}){
        return "LOGOUT users";
    }

}
