// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Profile from "App/Models/Profile";
import { profiler } from "Config/app";
import { Exception } from "@poppinss/utils";
//import UsersSchema from "Database/migrations/1636979126300_users";

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export default class ProfilesController {
    public async index({ auth }) {
        //const currentProfile = await Profile.first({userId: auth.user.id })
        //const currentProfile = await Profile.all()
        // const payload = await request.validate({ schema: newProfileSchema })
        // const currentProfile = await Profile.findBy('user_id', auth.user.id);
        // if (!currentProfile) throw new Exception("Profile Not Found")
        // const user = await User.find(currentProfile.userId)
        // return { currentProfile, user };

        // const currentProfile = await Profile.query().where('user_id', auth.user.id).preload('user').first();
        const currentProfile = await Profile.findBy('user_id', auth.user.id);
        if (!currentProfile) throw new Exception("Profile Not Found")
        await currentProfile.load('user');
        return currentProfile;
    }


    public async create({ request, auth }) {
        const newProfileSchema = schema.create({
            name: schema.string({ trim: true }, [
                rules.alpha(), rules.minLength(3), rules.maxLength(30),
            ]),
            gender: schema.enum(Object.values(Gender)),
            mobile: schema.string({ trim: true }, [
                rules.minLength(10), rules.maxLength(10), rules.regex(/^[0-9]+$/)
            ]),
            dateOfBirth: schema.date({
                format: 'yyyy-MM-dd',
            })
        })
        const payload = await request.validate({ schema: newProfileSchema })
        const profile = await Profile.create({ ...payload, userId: auth.user.id })
        return profile;
    }


    public async update({ request, auth }) {
        const payload = await request.validate({ schema: newProfileSchema })
        const profile = await Profile.create({ ...payload, userId: auth.user.id })
        return profile;


        const currentProfile = await Profile.findOrFail(1)
        user.last_login_at = DateTime.local() // Luxon dateTime is used

        await user.save()

    }


    public async destroy({ auth }) {
        const profile = await Profile.findById({ userId: auth.user.id });
        await profile.delete()
    }





























}

        //   try {
        //     const token = await auth.use('api').attempt(email, password)
        //     return token
        // } catch {
        //     return response.badRequest('Invalid credentials')
        // }



    // public async store({request,response}){
    //     const body = request.post()

    //     const user = await User.create({
    //         name: request.input("email"),
    //         email: request.input("email"),
    //         password: request.input("password")
    //     })

    //     return response.redirect("back");
    // }

    // public async create({request,response}){
    //     return response.render("register");
    // }

    // public async show({response, params:{id}}){
    //     const user = User.find(id)

    //     if(User){
    //         return response.status(201).json({
    //             message: "Here is the user",
    //             data: User
    //         })
    //     }else{
    //         return response.json({
    //             message: "User not found",
    //             id
    //         }) 
    //     }


    // }

    // public async update({response, params:{id}}){
    //     const body = request.post()

    //     response.json({
    //         message: "successfully updated a new User",
    //         id
    //     }) 
    // }

    // public async destroy({response, params:{id}}){
    //     response.json({
    //         message: "successfully deleted",
    //         id
    //     }) 

    // }




