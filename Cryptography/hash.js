const crypto = require('crypto');

function calculateSHA256Hash(message) {
    const hash = crypto.createHash('sha256');
    hash.update(message);
    return hash.digest('hex');
}

const messageInput = 'hi, my name is vivek.';
const hash = calculateSHA256Hash(messageInput);

console.log('Original Message:', messageInput);
console.log('SHA-256 Hash:', hash);
