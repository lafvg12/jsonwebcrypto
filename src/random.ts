import { randomInt, randomUUID } from "./config/crypto";

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
