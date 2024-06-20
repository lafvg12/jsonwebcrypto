import { derivePasswordHash, generateSalt } from "./src";

const password = "secret key";
const salt = generateSalt(16);

const passwordhasehd = derivePasswordHash(password, salt);
console.log("🚀 ~ passwordhasehd:", passwordhasehd);
