import * as authSevice from '../services/authService';
export const register = async (req, res) => {
    const {username, password, phone} = req.body;
    const newPhone = await Number(phone)
    try {
        if(!username || !password || !newPhone) return res.status(400).json({
            err: 1,
            msg: 'Missing input!'
        })
        const response = await authSevice.register({username, password, phone: newPhone })
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController register: ${error}`, 
        })
    }
}
export const login = async (req, res) => {
    const {password, phone} = req.body;
    try {
        if(!password || !phone) return res.status(400).json({
            err: 1,
            msg: 'Missing input!'
        })
        const response = await authSevice.login({password, phone})
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: `error at authController ${error}`, 
        })
    }
}