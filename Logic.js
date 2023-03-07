const crypto = require('crypto');

class StringEncrypter {

  constructor(key) {

    this.key = key;

    this.iv = crypto.randomBytes(16);

  }

  encrypt(str) {

    const cipher = crypto.createCipheriv('aes-256-cbc', this.key, this.iv);

    let encrypted = cipher.update(str, 'utf8', 'hex');

    encrypted += cipher.final('hex');

    return `${this.iv.toString('hex')}:${encrypted}`;

  }

  decrypt(str) {

    const [ivHex, encryptedHex] = str.split(':');

    const iv = Buffer.from(ivHex, 'hex');

    const encrypted = Buffer.from(encryptedHex, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-cbc', this.key, iv);

    let decrypted = decipher.update(encrypted, null, 'utf8');

    decrypted += decipher.final('utf8');

    return decrypted;

  }

}

const encrypter = new StringEncrypter(crypto.randomBytes(32));

const originalString = "CoolPassword123";

const encryptedString = encrypter.encrypt(originalString);

const decryptedString = encrypter.decrypt(encryptedString);

console.log(`Original string: ${originalString}`);

console.log(`Encrypted string: ${encryptedString}`);

console.log(`Decrypted string: ${decryptedString}`);

