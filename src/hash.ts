import { createHash, Hash } from "./config/crypto";
import { TAlgorithm } from "./types";

/**
 * Generates a hash from the given data using the specified algorithm.
 * @param algorithm : TAlgorithm "sha1" | "sha256" | "sha512 default is "sha256"
 * @param data
 * @returns string hex
 */

export function hash(data: string, algorithm: TAlgorithm = "sha256"): string {
  const validAlgorithms: TAlgorithm[] = [
    "md5",
    "sha1",
    "sha256",
    "sha384",
    "sha512",
    "ripemd160",
    "whirlpool",
    "sha224",
    "sha512-224",
    "sha512-256",
  ];
  if (!validAlgorithms.includes(algorithm)) {
    throw new Error(
      `Algorithm not supported, please choose one : ${validAlgorithms.join(
        ", "
      )}`
    );
  }
  return createHash(algorithm).update(data).digest("hex");
}
