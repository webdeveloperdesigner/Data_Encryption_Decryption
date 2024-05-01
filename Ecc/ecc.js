const eccrypto = require('eccrypto');
const crypto = require('crypto');

// Replace these keys with your actual ECC keys
const privateKey = Buffer.from('d3853c374b0ce4836d735c9e88168df3d8effc90a96889c0eea7808bf9f03360', 'hex');
const publicKey = Buffer.from('049165fbf1ea85f622716e12db8d7c146e5556ba14d43a9cc480b253a1f671394802ebd90ec6b61c47d9c547aa0946aeda13d081ad27a84091d770d6d36205a713', 'hex');

// Data to be encrypted
const dataToEncrypt = 'Your data to encrypt';

// Generate a random initialization vector (IV)
const iv = crypto.randomBytes(16);

// Perform ECC-based encryption
eccrypto.encrypt(publicKey, Buffer.from(dataToEncrypt))
  .then(encryptedData => {
    // The encrypted data will be an object containing ciphertext and an ephemeral public key
    const ciphertext = encryptedData.ciphertext;
    const ephemPublicKey = encryptedData.ephemPublicKey;

    // You can convert these to base64 or other formats as needed
    const ciphertextBase64 = ciphertext.toString('base64');
    const ephemPublicKeyBase64 = ephemPublicKey.toString('base64');

    console.log('Encrypted data:', ciphertextBase64);
    console.log('Ephemeral public key:', ephemPublicKeyBase64);

    // Perform ECC-based decryption
    eccrypto.decrypt(privateKey, encryptedData)
      .then(plainText => {
        console.log('Decrypted data:', plainText.toString('utf8'));
      })
      .catch(error => {
        console.error('Decryption error:', error);
      });
  })
  .catch(error => {
    console.error('Encryption error:', error);
  });