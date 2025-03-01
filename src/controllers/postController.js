
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
    console.log(req)
    const {page, ...arraySearch} = req.query
    // console.log('Tìm bài đăng với các thuộc tính gồm ',arraySearch, ' và tìm ở trang số ',page)
    try {
        const response = await postService.getLimit(page,arraySearch)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController register: ${error}`, 
        })
    }
}
export const getPostNewUpdateList = async (req, res) => {
    try {
        const response = await postService.getNewUpdateList()
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController register: ${error}`, 
        })
    }
}