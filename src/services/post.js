import axiosConfig from '../axiosConfig'
// const apiPostGetAll = () => {new Promise(async (resolve, reject) => {
//     try {
//         const response = await axiosConfig({
//             method: 'GET',
//             url: 'api/v1/post/getAll',
//         })
//         console.log(response)
//         resolve(response)
//     } catch (error) {
//         console.log(error)
//         reject(error)
//     }
// })}
const apiPostGetAll = async () => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: 'api/v1/post/getAll',
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}

const apiPostGetLimit = async (page, codePrice, codeArea) => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: `api/v1/post/`,
            params: {
                page: page,
                codePrice: codePrice,
                codeArea: codeArea
            }
        })
        return response
    } catch (error) {
        console.log(error)
    }
}
export {apiPostGetAll, apiPostGetLimit}