const formatArea = (Area) => {
    const newArea = Area.match(/\d+/)[0];
    return +newArea 
}

export default formatArea

