


# Secret Messenger - Securely Encrypt and Decrypt Messages

Want to keep your messages safe from prying eyes? Look no further than Secret Messenger! Our advanced encryption technology uses a unique key to securely encrypt and decrypt your messages, ensuring that only you and your intended recipient can read them.

**Checkout:**
```js
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
const originalString = "I break my dad's laptop what I'm gonna do? Please don't tell to anyone.";
const encryptedString = encrypter.encrypt(originalString);
const decryptedString = encrypter.decrypt(encryptedString);

console.log(`Original string: ${originalString}`);
console.log(`Encrypted string: ${encryptedString}`);
console.log(`Decrypted string: ${decryptedString}`);

```

**Explanation**

Are you tired of worrying about your private messages being intercepted and read by others? Fear not, for Secret Messenger is here to save the day! With our top-of-the-line encryption technology, your messages are locked down tight, safe from anyone who doesn't have the key. Plus, our easy-to-use interface makes sending and receiving encrypted messages a breeze. So why wait? Try Secret Messenger today and keep your conversations private, just like they should be!
