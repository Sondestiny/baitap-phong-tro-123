import db from '../models';
import { hashPassword } from './authService';
import generateCode from '../ultis/generateCode';
import formatPriceToNumber from '../ultis/formatPriceToNumber'
import formatArea from '../ultis/formatAreaToNumber'
import {dataPrices, dataAreas, dataCategories} from '../ultis/data'
import { v4 } from 'uuid';
import dotenv from 'dotenv';
import chothuephongtro from '../../data/chothuephongtro.json';
import chothuecanhomini from '../../data/chothuecanhomini.json';
import chothuenhanguyencan from '../../data/chothuenhanguyencan.json';
import chothuecanhochungcu from '../../data/chothuecanhochungcu.json';
dotenv.config()
const datas = [
    {
        value: chothuephongtro,
        codeCategory: 'CHPT'
    },
    {
        value: chothuecanhomini,
        codeCategory: 'CHCHMN'
    },
    {
        value: chothuenhanguyencan,
        codeCategory: 'CHNNC'
    },
    {
        value: chothuecanhochungcu,
        codeCategory: 'CHCHCC'
    },
];
export const insert = () =>  new Promise(async(resolve, reject) => {
    try {
        dataPrices.forEach (async (price) => {
            let priceID = v4();
            await db.PriceFilter.create({
                id: priceID,
                order: price.order,
                code: price.code,
                value: price.value,
            })
        })
        dataAreas.forEach (async (area) => {
            let acreageID = v4();
            await db.AreaFilter.create({
                id: acreageID,
                order: area.order,
                code: area.code,
                value: area.value,
            })
        })

        dataCategories.forEach (async (Category) => {
            let CategoryID = v4();
            await db.Category.create({
                id: CategoryID,
                code: Category.code,
                value: Category.value,
                subtitle: Category.subtitle
            })
        })

        datas.forEach( async (data) => {
            let postId = v4();
            let userID = v4()
            let overviewID = v4()
            let image_id = v4()
            let attributesID = v4();
            let labelcode = generateCode(4);
            let currentPrice = formatPriceToNumber(data.value.header.price)
            let currentArea = formatArea(data.value.header.acreage)
            const post = await db.Post.build({
                id: postId,
                title: data.value.header.title,
                star: data.value.header.star[1],
                labelcode,
                address: data.value.header.address,
                attributesID,
                categoryCode: data.codeCategory,
                codePrice: dataPrices.find(({min, max})=>max >= currentPrice & min <= currentPrice)?.code,
                codeArea: dataAreas.find(({min, max})=>max >= currentArea & min <= currentArea)?.code,
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
                price: data.value.header.price,
                acreage: data.value.header.acreage,
                published: true,
                hashtag: null,
            })
            await db.Image.create({
                id: image_id,
                images: JSON.stringify(data.value.image),
            })
            await db.Overview.create({
                id: overviewID,
                code:data.value.overview.Code.context,
                type:data.value.overview.packet.context,
                created: data.value.overview.dateRelease.context,
                expire: data.value.overview.dateExpired.context,
            })
            await db.User.create({
                id: userID,
                username: data.value.contact.contactName,
                password: hashPassword("123456"),
                phone: data.value.contact.contactPhone,
                zalo: data.value.contact.contactZalo,
            })
            await db.label.create({
                id: labelcode,
                code: data.codeCategory,
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