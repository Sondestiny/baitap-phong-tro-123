const formatPrice = (price) => {
    const newPrice = price.includes('triệu/tháng') ? price.replace('triệu/tháng', '')*1000 : price.replace('đồng/tháng', '');
    return +newPrice 
}

export default formatPrice

