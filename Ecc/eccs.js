const elliptic = require('elliptic');
const crypto = require('crypto'); // Add the 'crypto' module

const ec = new elliptic.ec('secp256k1');

// Generate ECC key pair
const keyPair = ec.genKeyPair();

const privateKey = keyPair.getPrivate('hex');
const publicKey = keyPair.getPublic('hex');

const message = Buffer.from("hi,csed Welcome to Blockchain");

// Sign the message
const signature = ec.sign(message, privateKey, 'hex');
console.log("Signature:", signature.toDER('hex'));

// Verify the signature
const isValid = ec.verify(message, signature, publicKey, 'hex');
if (isValid) {
  console.log("Valid Signature");
} else {
  console.log("Invalid Signature");
}

// Calculate SHA-256 hash of the public key
const publicKeyHash = crypto.createHash('sha256').update(publicKey, 'hex').digest('hex');
console.log("SHA-256 Hash of Public Key:", publicKeyHash);
