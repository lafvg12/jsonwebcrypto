import crypto from "crypto";
import type {
  CipherGCMTypes,
  BinaryLike,
  CipherKey,
  CipherCCMTypes,
  CipherCCMOptions,
  Encoding,
  Hash,
  KeyObject,
} from "crypto";

export type {
  CipherGCMTypes,
  BinaryLike,
  CipherKey,
  CipherCCMTypes,
  CipherCCMOptions,
  Encoding,
  KeyObject,
  Hash,
};

export const {
  randomUUID,
  randomBytes,
  randomInt,
  createCipheriv,
  createHash,
  scryptSync,
  createHmac,
  createSecretKey,
} = crypto;
