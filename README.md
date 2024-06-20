# Json Web crypto Library 🔒

A simple and efficient wrapper around Node.js's `crypto` module to facilitate hashing, encryption, and other cryptographic operations.

## Features

- Hashing with support for various algorithms
- Salting and hashing for secure password storage
- Easy-to-use API with TypeScript support

## Installation

Install the library using npm:

```bash
npm install jsonwebcrypto
```

Using Hash Functionality:

```javascript

import { hash } from 'jsonwebcrypto';

// Default algorithm (sha256)
const hashedData = hash('mySensitiveData');
// 6a3f1170639924207838c3715ff94989db6ec344759e311073852ea882993fbb

// Using a different algorithm (sha512)
const sha512HashedData = hash('mySensitiveData', 'sha512');
//7ce5e2c90d3960dfde32ee7f8427a0a0ed020dd6b9a4162e11a37d12ea95d596d6210757be7427ca3fb9142a804065067868ebeda67d989b5f5a55f4b00d7590

```

Using the UUID Generator Functionality

```javascript

import { generateRandomUUID } from 'jsonwebcrypto';

const customerUUID = generateRandomUUID();

customerUUID: // '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'


```
