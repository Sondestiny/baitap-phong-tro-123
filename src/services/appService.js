import db from '../models'
export const getAllAppData = () =>  new Promise(async(resolve, reject) => {
    try {
        const priceData = await db.PriceFilter.findAll({ 
            attributes: ['code', 'value']
        })
        const areaData = await db.AreaFilter.findAll({ 
            attributes: ['code', 'value']
        })
        const CategoryData = await db.Category.findAll({ 
            attributes: ['code', 'value', 'subtitle']
        })
        const response = {priceData,areaData, CategoryData}
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Get price, area, category successfully ' : 'error at getAll data price, area, category from database',
            response: response || null
        })
    } catch (error) {
        reject(error)
    }
})