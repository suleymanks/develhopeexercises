const crypto = require('crypto');

crypto.getHashes();

const randomBytes = crypto.randomBytes(16).toString('hex');

console.log(randomBytes);