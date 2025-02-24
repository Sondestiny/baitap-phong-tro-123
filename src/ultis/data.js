const dataPrices = [
    {code: 'H5SDGDG6', order:1, min: 0, max: 1000, value: 'Dưới 1 triệu'},
    {code: '51SSGEHG', order:2, min: 1000, max: 2000, value: 'Từ 1-2 triệu'},
    {code: 'SE51GS6E', order:3, min: 2000, max: 3000, value: 'Từ 2-3 triệu'},
    {code: 'S35E1GSE', order:4, min: 3000, max: 5000, value: 'Từ 3-5 triệu'},
    {code: '54SVSEGS', order:5, min: 5000, max: 7000, value: 'Từ 5-7 triệu'},
    {code: '6EAGD3H2', order:6, min: 7000, max: 9000, value: 'Từ 7-9 triệu'},
    {code: 'AERG98AE', order:7, min: 9000, max: 10000000, value: 'Trên 9 triệu'}, 
]
const dataAreas = [
    {code: 'A8ERGA19', order:1, min: 0, max: 20, value: 'Dưới 20m'},
    {code: 'AE8G4sdG', order:2, min: 20, max: 30, value: 'Từ 20-30m'},
    {code: '6WEGASWH', order:3, min: 30, max: 50, value: 'Từ 30-50m'},
    {code: '6AWE51VF', order:4, min: 50, max: 70, value: 'Từ 50-70m'},
    {code: 'AW2EG1WH', order:5, min: 70, max: 90, value: 'Từ 70-90m'},
    {code: '23XVZ51S', order:6, min: 90, max: 99999, value: 'Trên 90m'}, 
]

const dataCategories = [
    {
        code: 'CHPT',
        value: 'Cho thuê phòng trọ',
        subtitle: 'Kênh thông tin Phòng trọ số 1 Việt Nam'
    },
    {
        code: 'CHNNC',
        value: 'Cho thuê nhà nguyên căn',
        subtitle: 'Cho Thuê Nhà Nguyên Căn, Giá Rẻ, Chính Chủ, Mới Nhất 2025'
    },
    {
        code: 'CHCHCC',
        value: 'Cho thuê căn hộ chung cư',
        subtitle: 'Cho Thuê Căn Hộ Chung Cư, Giá Rẻ, View Đẹp, Mới Nhất 2025'
    },
    {
        code: 'CHCHMN',
        value: 'Cho thuê căn hộ mini',
        subtitle: 'Cho Thuê Căn Hộ Mini + Chung Cư Mini Giá Rẻ, Mới Nhất 2025'
    },
    
]
export {dataPrices, dataAreas, dataCategories}