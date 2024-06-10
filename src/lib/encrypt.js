const bcrypt = require('bcrypt');

const SALT_ROUND = 10;

function encrypt(text){
    return bcrypt.hash(text, SALT_ROUND)
}

function compare(plainText, hash){
    return bcrypt.compare(plainText, hash)
}

module.exports = {
    encrypt,
    compare
}