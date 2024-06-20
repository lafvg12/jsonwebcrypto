import { randomInt, randomUUID, randomBytes } from "./config/crypto";
import { MAX_SIZE } from "./constants";
import { TOutputFormat } from "./types";

export const generateRandomUUID = (): string => {
  return randomUUID();
};

/**
 * Generate a random integer between min and max
 * @param min - The minimum value
 * @param max - The maximum value
 * @returns A random integer between min and max
 */

export const generateRandomInt = (min: number, max: number) => {
  return randomInt(min, max);
};

/**
 * Generates random bytes
 * @param size - The size of the random bytes, max 2 ** 31 - 1. Default is 16.
 * @param format - The output format: 'hex', 'base64', or 'buffer'. Default is 'hex'.
 * @returns A string of random bytes in the specified format, or a Buffer if 'buffer' is specified
 * @throws Will throw an error if the size is larger than the maximum allowed
 */

export const randomBytesGenerator = (
  size: number = 16,
  format: TOutputFormat = "hex"
): string | Buffer => {
  if (size > MAX_SIZE)
    throw new Error(`Size too large. Maximum allowed is ${MAX_SIZE}`);

  const bytes = randomBytes(size);

  switch (format) {
    case "hex":
      return bytes.toString("hex");
    case "base64":
      return bytes.toString("base64");
    case "buffer":
      return bytes;
    default:
      throw new Error("Unsupported format");
  }
};
