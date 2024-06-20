import { scryptSync } from "./config/crypto";
import { DEFAULT_KEYLEN, DEFAULT_OPTIONS, MAX_SIZE } from "./constants";
import { randomBytesGenerator } from "./random";
import { ScryptOptions } from "./types";

/**
 * Derives a hash from a password using a secure scrypt algorithm.
 * @param password - The password to hash, either a string or Buffer.
 * @param salt - The salt to use, either a string or Buffer.
 * @param keylen - The desired key length, in bytes. Default is 64.
 * @param options - Optional scrypt algorithm parameters to customize cost, block size, parallelization, and max memory.
 * @returns A hexadecimal string representing the derived hash.
 * @throws Will throw an error if any parameter is invalid or if the key derivation fails.
 */
export const derivePasswordHash = (
  password: string | Buffer,
  salt: string | Buffer,
  keylen: number = DEFAULT_KEYLEN,
  options: ScryptOptions = DEFAULT_OPTIONS
): string => {
  const { cost, blockSize, parallelization, maxmem } = options;
  const hash: Buffer = scryptSync(password, salt, keylen, {
    N: cost,
    r: blockSize,
    p: parallelization,
    maxmem,
  });
  return hash.toString("hex");
};

/**
 * Generates a random salt.
 * @param size - The size of the salt, max 2 ** 31 - 1. Default is 16.
 * @returns A string or Buffer containing the random salt.
 * @throws Will throw an error if the size exceeds the maximum allowed value.
 */
export const generateSalt = (size: number = 16): string | Buffer => {
  if (size > MAX_SIZE) {
    throw new Error(`Salt too large. Maximum allowed is ${MAX_SIZE}`);
  }
  return randomBytesGenerator(size);
};
