import db from '../models'
export const getAll = () =>  new Promise(async(resolve, reject) => {
    try {
        const response = await db.Post.findAll({ 
            raw: true,
            nest: true,
            attributes: ['title', 'star', 'description', 'address'],
            include: [
                {model: db.Image, as: 'images', attributes: ['images']},
                {model: db.Atribute, as: 'attribute', attributes: ['price', 'acreage']},
                {model: db.User, as: 'user', attributes:['username', 'phone', 'zalo']}
            ],
            limit: 6,
            // where: { title: 'My Title' } 
        })

        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get post successfully ' : 'error at getAll data post from database',
            response: response || null
        })
    } catch (error) {
        reject(error)
    }
})
// post forload by page number
export const getLimit = (page, arraySearch) =>  new Promise(async(resolve, reject) => {
    try {
            const {count, rows} = await db.Post.findAndCountAll({ 
                raw: true,
                nest: true,
                offset: page > 1 ? ((page-1) * +process.env.LIMIT_PAGE) : 0,
                limit: +process.env.LIMIT_PAGE || 5,
                attributes: ['title', 'star', 'description', 'address'],
                include: [
                    {model: db.Image, as: 'images', attributes: ['images']},
                    {model: db.Atribute, as: 'attribute', attributes: ['price', 'acreage']},
                    {model: db.User, as: 'user', attributes:['username', 'phone', 'zalo']}
                ],
                where: arraySearch
            })
        resolve({
            err: count ? 0 : 1,
            msg: count ? 'Get post successfully ' : 'error at getLimit data post from database',
            response: {count, rows}|| null
        })
    } catch (error) {
        reject(error)
    }
})
export const getNewUpdateList = () => new Promise( async (resolve, reject) => {
    try {
        const response = await db.Post.findAll({
                raw: true,
                nest: true,
                order: [
                    ['updatedAt', 'DESC']
                ],
                attributes: ['title', 'updatedAt'],
                include: [
                    {model: db.Image, as: 'images', attributes: ['images']},
                    {model: db.Atribute, as: 'attribute', attributes: ['price']},
                ],
                limit: +process.env.LIMIT_POST_NEW_UPDATE  || 10,

        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get post List new update successfully ' : 'error at Get post List new update from database',
            response: response || null
        })
    } catch (error) {
        reject(error)
    }
})