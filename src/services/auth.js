import axiosConfig from '../axiosConfig'
const apiRegister = (payload) => {new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'POST',
            url: 'api/v1/auth/register',
            data: payload
        })
        resolve(response)
    } catch (error) {
        console.log(error)
        reject(error)
    }
})}
// const apiRegister = async (payload) => {
//     try {
//         const response = await axiosConfig({
//             method: 'POST',
//             url: 'api/v1/auth/register',
//             data: payload
//         })
//         return response
//     } catch (error) {
//         console.log(error)
//     }
// }
const apiLogin = async (payload) => {
    try {
        const response = await axiosConfig({
            method: 'POST',
            url: 'api/v1/auth/login',
            data: payload
        })
        return response
        
    } catch (error) {
        console.log(error)
    }
}

export {apiRegister, apiLogin}