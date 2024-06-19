import { encrypt } from "../src/encrypt";
import { decrypt } from "../src/decrypt";

test("decrypts text", () => {
  const key = Buffer.alloc(32, "a");
  const { encryptedData, iv, tag } = encrypt("Hello, World!");
  const decryptedData = decrypt(encryptedData, iv, tag, key);
  expect(decryptedData).toBe("Hello, World!");
});
