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
  randomInt,
  createCipheriv,
  randomBytes,
  createHash,
} = crypto;
