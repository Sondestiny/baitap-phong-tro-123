import axiosConfig from '../axiosConfig'
const apiRegister = (payload) => {new Promise(async (resolve, reject) => {
    try {
        const response = await axiosConfig({
            method: 'POST',
            url: 'api/v1/auth/register',
            data: payload
        })
        console.log(response)
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
        console.log(response)
        return response
        
    } catch (error) {
        console.log(error)
    }
}

export {apiRegister, apiLogin}