# Json Web crypto Library 🔒🛡️ 

![Esta es una imagen de ejemplo](https://jwt.io/img/badge-compatible.svg)


This library serves as a simple and efficient wrapper around Node.js's crypto module, designed to facilitate hashing, encryption, and other cryptographic operations.

**Key Features:**

- **Comprehensive Security Functions**: All security-related functions and utilities are consolidated within this library. This includes password hashing, encryption, decryption, and more, making it a one-stop solution for your cryptographic needs.
  
- **Ease of Use**: Provides a user-friendly interface to perform complex cryptographic operations, reducing the complexity involved in using Node.js's crypto module directly.
  
- **Efficient Performance**: Optimized for performance, ensuring that cryptographic operations are carried out swiftly and securely.
  
- **No Need for Multiple Libraries**: By integrating a wide range of cryptographic functions into a single library, it eliminates the need to install and manage multiple libraries. This simplifies development and ensures better maintainability.


## Installation

Install the library using npm:

```bash
npm install jsonwebcrypto
```

## JWT Utilities  🔑

This project provides utility functions for signing and verifying JSON Web Tokens (JWT) using HMAC algorithms. The main functions are `signJWT` and `verifyJWT`.

- **signJWT** 🛡️
```javascript
import { signJWT } from 'jsonwebcrypto';

const payload: JWTPayload = { userId: 123 };

const secret = 'mysecretkey';

//Options object is optional⭐
const options: SignOptions = {
  expiresIn: '3d', // 3 days
  notBefore: '1h', // 1 hour
  algorithm: 'HS256' // HMAC SHA-256
};

const token = signJWT(payload, secret, options);

```

- **verifyJWT** ✅

```javascript
import { verifyJWT } from 'jsonwebcrypto';

const tokenToVerify = 'your.jwt.token.here';
const secret = 'mysecretkey';

try {
    //if you assigned audience or other option here validate, otherwise just send secret and token
    const decoded = verifyJWT(tokenToVerify, secret, { audience: 'your-audience'});
  } catch (error) {
    if (error instanceof TokenExpiredError) {
      console.error('Token has expired:', error.expiredAt);
    } else if (error instanceof JsonWebTokenError) {
      console.error('JWT Error:', error.message);
    } else {
      console.error('Unknown error:', error);
    }
  }

```

## More Secure Password Derivation 🔐
To derive passwords more securely.

The function derivePasswordHash()
internally uses a key derivation algorithm specifically designed to be secure for password storage. It is resistant to brute-force attacks and hardware-specialized attacks (such as ASICs). 

```javascript
    import { derivePasswordHash, generateSalt } from "jsonwebcrypto";

    const password = "secret key";
    const salt = generateSalt(16);

    const passwordHashed = derivePasswordHash(password, salt);
    passwordHashed // 60270c8ab01a4b357ee72981d5700d06508d6ad4cd75080798b0c9ed363bf021
```


## Using Hash Functionality:

```javascript

import { hash } from 'jsonwebcrypto';

// Default algorithm (sha256)
const hashedData = hash('mySensitiveData');
// 6a3f1170639924207838c3715ff94989db6ec344759e311073852ea882993fbb

// Using a different algorithm (sha512)
const sha512HashedData = hash('mySensitiveData', 'sha512');
//7ce5e2c90d3960dfde32ee7f8427a0a0ed020dd6b9a4162e11a37d12ea95d596d6210757be7427ca3fb9142a804065067868ebeda67d989b5f5a55f4b00d7590

```

## Using the UUID Generator Functionality

```javascript

import { generateRandomUUID } from 'jsonwebcrypto';

const customerUUID = generateRandomUUID();

customerUUID: // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


```
