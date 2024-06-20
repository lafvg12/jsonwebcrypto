# Json Web crypto Library 🔒🛡️


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
