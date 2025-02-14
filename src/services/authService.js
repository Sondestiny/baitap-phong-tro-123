import db from '../models'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import { v4 } from 'uuid'
import dotenv from 'dotenv'
dotenv.config()
export const hashPassword = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(12));
export const register = ({username, password, phone}) =>  new Promise(async(resolve, reject) => {
    try {
        const [user, created] = await db.User.findOrCreate({
            where: {
                    phone: phone
                },
            defaults: {
                id: v4(),
                username: username,
                password: hashPassword(password),
                phone: phone,
            }
        })
        console.log({username, password, phone})
        console.log([user, created])
        const token = created && await jwt.sign( {id: user.id, phone: user.phone,}, process.env.SERCET_KEY, {expiresIn: '2d'})

        resolve({
            err: token ? 0 : 2,
            msg: token ? 'register is successfully ' : 'Phone number have already used!',
            token: token || null
        })
    } catch (error) {
        reject(error);
    }
});
export const login = ({password, phone}) =>  new Promise(async(resolve, reject) => {
    try {
        const user = await db.User.findOne({
            where: {
                phone: phone
            },
            raw: true
        })
        
        const IsCorrectPassword = user && await bcryptjs.compareSync(password, user.password);
        console.log([user,IsCorrectPassword])
        const token = IsCorrectPassword && jwt.sign( {id: user.id, phone: user.phone}, process.env.SERCET_KEY, {expiresIn: '2d'})
        console.log(token)
        resolve({
            err: token ? 0 : 2,
            msg: token ? 'login is successfully ' : user ? 'Password is incorrect' : 'Cant find username',
            token: token || null
        })
    } catch (error) {
        reject(error);
    }
});