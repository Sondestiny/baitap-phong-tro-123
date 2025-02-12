import db from '../models'
import { hashPassword } from './authService'
import generateCode from '../ultis/generateCode'
import { v4 } from 'uuid'
import dotenv from 'dotenv'
import chothuephongtro from '../../data/chothuephongtro.json'
dotenv.config()
const image_id = v4();
const datas = chothuephongtro;
export const insert = () =>  new Promise(async(resolve, reject) => {
    try {
        datas.forEach( async (data) => {
            let postId = v4();
            let userID = v4()
            let overviewID = v4()
            let image_id = v4()
            let attributesID = v4();
            let labelcode = generateCode(4);
            const post = await db.Post.build({
                id: postId,
                title: data.header.title,
                star: data.header.star[1],
                labelcode,
                address: data.header.address,
                attributesID,
                categoryCode: "CHPT",
                description: JSON.stringify(data.description),
                userID,
                overviewID,
                imagesID: image_id,
                createdAt: Date.now(),
                updatedAt: Date.now(),
            })
            await post.save();

            await db.Atribute.create({
                id: attributesID,
                price: data.header.price,
                acreage: data.header.acreage,
                published: true,
                hashtag: null,
            })
            await db.Image.create({
                id: image_id,
                images: JSON.stringify(data.image),
            })
            await db.Overview.create({
                id: overviewID,
                code:data.overview.Code.context,
                type:data.overview.packet.context,
                created: data.overview.dateRelease.context,
                expire: data.overview.dateExpired.context,
            })
            await db.User.create({
                id: userID,
                username: data.contact.contactName,
                password: hashPassword("123456"),
                phone: data.contact.contactPhone,
                zalo: data.contact.contactZalo,
            })
            await db.label.create({
                id: labelcode,
                code: "CHPT",
                value: null,
            })
        })
        resolve({
                err: 0,
                msg: 'insert database completed successfully',
                token: null
        })
    } catch (error) {
        reject(error);
    }
});