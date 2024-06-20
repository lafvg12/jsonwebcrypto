// crypto.test.js
import { derivePasswordHash, generateSalt } from "../src";
import { MAX_SIZE } from "../src/constants";

describe("derivePasswordHash", () => {
  it("should derive a hash from a password and salt", () => {
    const password = "myPassword";
    const salt = "random_salt";
    const keylen = 64;
    const hash = derivePasswordHash(password, salt, keylen);
    expect(hash).toHaveLength(2 * keylen);
    expect(typeof hash).toBe("string");
  });

  it("should use default keylen if not provided", () => {
    const password = "myPassword";
    const salt = "random_salt";
    const hash = derivePasswordHash(password, salt);
    expect(hash).toHaveLength(2 * 32);
  });

  it("should throw an error for invalid parameters", () => {
    const password = "myPassword";
    const salt = "random_salt";
    expect(() => derivePasswordHash(password, salt, MAX_SIZE + 1)).toThrow();
  });
});

describe("generateSalt", () => {
  it("should generate a random salt of the given size", () => {
    const size = 16;
    const salt = generateSalt(size);
    expect(salt).toHaveLength(2 * size);
    expect(typeof salt).toBe("string");
  });

  it("should use default size if not provided", () => {
    const salt = generateSalt();
    expect(salt).not.toBeNull();
    expect(salt).toHaveLength(2 * 16);
  });

  it("should throw an error if size exceeds MAX_SIZE", () => {
    expect(() => generateSalt(MAX_SIZE + 1)).toThrow();
  });
});
