function makeId(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        let char = characters.charAt(Math.floor(Math.random() * charactersLength));

        //prevent number on the firs char
        if(i===0){
            if(isNaN(char)){
                result += char;
            } else {
                while (!isNaN(char)){
                    char = characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                result += char;
            }
        } else {
            result += char;
        }
        
    }
    return result;
}

function isString(elm){
    return typeof elm === 'string' || elm instanceof String;
}

module.exports = {makeId,isString}

