import axiosConfig from '../axiosConfig'
const apiGetAppData = async () => {
    try {
        const response = await axiosConfig({
            method: 'GET',
            url: 'api/v1/app/getData',
        })
        return response;
    } catch (error) {
        console.log(error)
    }
}
export {apiGetAppData}