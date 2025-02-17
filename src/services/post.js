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

const apiPostGetLimit = async (pageNumber) => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: `api/v1/post/?page=${pageNumber}`,
        })
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}
export {apiPostGetAll, apiPostGetLimit}