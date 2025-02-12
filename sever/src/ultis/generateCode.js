const generateCode =  (length) => {
    const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789"
    let code = ''
    for (let i = 0; i < length - 1; i++) {
        code += character.charAt(Math.floor(Math.random()*character.length));
    }
    code += number.charAt(Math.floor(Math.random()*number.length));
    return code
}
export default generateCode