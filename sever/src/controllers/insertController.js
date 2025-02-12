import * as insertService from '../services/insertService';

export const insert = async (req, res) => {

    try {
        const response = await insertService.insert()
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at insertController: ${error}`, 
        })
    }
}
