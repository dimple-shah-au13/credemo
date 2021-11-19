// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from "App/Models/User";
import { schema, rules } from '@ioc:Adonis/Core/Validator';
import Profile from "App/Models/Profile";
import { profiler } from "Config/app";
import { Exception } from "@poppinss/utils";
import { Response } from "@adonisjs/http-server/build/standalone";

enum Gender {
    MALE = 'male',
    FEMALE = 'female'
}

export default class ProfilesController {
    public async index({ auth }) {
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
        const newProfileSchema = schema.create({
            name: schema.string.optional({ trim: true }, [
                rules.alpha(), rules.minLength(3), rules.maxLength(30),
            ]),
            gender: schema.enum.optional(Object.values(Gender)),
            mobile: schema.string.optional({ trim: true }, [
                rules.minLength(10), rules.maxLength(10), rules.regex(/^[0-9]+$/)
            ]),
            dateOfBirth: schema.date.optional({
                format: 'yyyy-MM-dd',
            })
        })        
        const payload = await request.validate({ schema: newProfileSchema })
        const currentProfile = await Profile.findBy('user_id', auth.user.id);
        if (!currentProfile) throw new Exception("Profile Not Found")
        if(currentProfile){
            currentProfile.merge({
               ...payload ,userId: auth.user.id
            })
            await currentProfile.save()
        }
        return currentProfile;        

    }


    public async destroy({ auth ,response}) {
        const currentProfile = await Profile.findBy('user_id', auth.user.id);
        await currentProfile.delete()
        response.json({message:"deleted successfully"})
    }

}