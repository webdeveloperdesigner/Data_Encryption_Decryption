const crypto = require('crypto');

// Generate RSA key pair
const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

const message = 'Welcome to Blockchain';

// Encrypt using private key and decrypt using public key
console.log(privateKey);
console.log(publicKey);
const encryptedPrivate = crypto.privateEncrypt(privateKey, Buffer.from(message));
const decryptedPublic = crypto.publicDecrypt(publicKey, encryptedPrivate);

console.log('Encrypted using private key:', encryptedPrivate.toString('base64'));
console.log('Decrypted using public key:', decryptedPublic.toString());

// Encrypt using public key and decrypt using private key
const encryptedPublic = crypto.publicEncrypt(publicKey, Buffer.from(message));
const decryptedPrivate = crypto.privateDecrypt(privateKey, encryptedPublic);

console.log('Encrypted using public key:', encryptedPublic.toString('base64'));
console.log('Decrypted using private key:', decryptedPrivate.toString());
