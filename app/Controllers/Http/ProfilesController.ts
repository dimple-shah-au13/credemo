// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import UsersSchema from "Database/migrations/1636979126300_users";

export default class ProfilesController {
    public async index({response}){
        const users = await User.all()

        response.json({
            message: "Here are users",
            data: users
        })
        return "GET Profiles";
    }
    

    public async store({request,response}){
        const body = request.post()

        const user = await User.create({
            name: request.input("email"),
            email: request.input("email"),
            password: request.input("password")
        })
        
        return response.redirect("back");
    }

    public async create({request,response}){
        return response.render("register");
    }

    public async show({response, params:{id}}){
        const user = User.find(id)

        if(User){
            return response.status(201).json({
                message: "Here is the user",
                data: User
            })
        }else{
            return response.json({
                message: "User not found",
                id
            }) 
        }

        
    }

    public async update({response, params:{id}}){
        const body = request.post()

        response.json({
            message: "successfully updated a new User",
            id
        }) 
    }

    public async destroy({response, params:{id}}){
        response.json({
            message: "successfully deleted",
            id
        }) 
        
    }


    
}
