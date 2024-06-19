import { createDecipheriv, CipherGCMTypes } from "crypto";

const algorithm: CipherGCMTypes = "aes-256-gcm";

export function decrypt(
  encryptedData: string,
  iv: string,
  tag: string,
  key: Buffer
): string {
  const decipher = createDecipheriv(algorithm, key, Buffer.from(iv, "hex"));
  decipher.setAuthTag(Buffer.from(tag, "hex"));

  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");

  return decrypted;
}
