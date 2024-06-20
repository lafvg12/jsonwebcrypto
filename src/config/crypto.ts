import crypto from "crypto";
import type {
  CipherGCMTypes,
  BinaryLike,
  CipherKey,
  CipherCCMTypes,
  CipherCCMOptions,
  Encoding,
  Hash,
} from "crypto";

export type {
  CipherGCMTypes,
  BinaryLike,
  CipherKey,
  CipherCCMTypes,
  CipherCCMOptions,
  Encoding,
  Hash,
};

export const {
  randomUUID,
  randomBytes,
  randomInt,
  createCipheriv,
  createHash,
  scryptSync,
} = crypto;
