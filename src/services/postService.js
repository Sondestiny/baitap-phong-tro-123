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
});