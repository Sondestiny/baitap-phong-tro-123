import * as postService from '../services/postService';

export const getAllPost = async (req, res) => {
    try {
        const response = await postService.getAll()
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController register: ${error}`, 
        })
    }
}
export const getPostLimit = async (req, res) => {
    const pageNumber = await Number(req.query.page)

    try {
        const response = await postService.getLimit(pageNumber)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController register: ${error}`, 
        })
    }
}
