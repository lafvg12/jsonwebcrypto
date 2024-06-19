import { hash } from "../src/hash";

test("Should return a hash ", () => {
  const prevHashed =
    "2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b9824";
  const hasCreated = hash("hello");
  expect(hasCreated).toEqual(prevHashed);
});
