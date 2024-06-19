import { encrypt } from "../src/encrypt";

test("encrypts text", () => {
  const { encryptedData, iv, tag } = encrypt("Hello, World!");
  expect(encryptedData).toBeDefined();
  expect(iv).toBeDefined();
  expect(tag).toBeDefined();
});
