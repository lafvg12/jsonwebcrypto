import { createCipheriv, randomBytes, CipherGCMTypes } from "crypto";

const algorithm: CipherGCMTypes = "aes-256-gcm";
const key = randomBytes(32);

export function encrypt(text: string): {
  encryptedData: string;
  iv: string;
  tag: string;
} {
  const iv = randomBytes(16);
  const cipher = createCipheriv(algorithm, key, iv);

  let encrypted = cipher.update(text, "utf8", "hex");
  encrypted += cipher.final("hex");

  const tag = cipher.getAuthTag().toString("hex");

  return {
    encryptedData: encrypted,
    iv: iv.toString("hex"),
    tag: tag,
  };
}
