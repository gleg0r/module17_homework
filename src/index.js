function shapeshifter(str) {
    let newStr = '';
    for(let i = str.length; i--; i >= 0) {
        newStr += str[i]
    }
    return newStr;
}
module.exports = shapeshifter