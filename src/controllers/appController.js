import * as appService from '../services/appService';
export const getAllAppData = async (req, res) => {
    try {
        const response = await appService.getAllAppData()
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at appController: ${error}`, 
        })
    }
}
