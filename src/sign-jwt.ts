import { createHmac, createSecretKey, KeyObject } from "./config/crypto";
import { JWTPayload, SignOptions } from "./types";
import { base64url, parseDuration } from "./utils/jwt";

/**
 * Signs a JWT with the given payload, secret or private key, and options.
 * @param payload - The payload to include in the JWT.
 * @param secretOrPrivateKey - The secret or private key to sign the JWT.
 * @param options - Optional parameters for signing the JWT.
 * @returns The signed JWT.
 * @throws Will throw an error if the algorithm is invalid or the secret key format is invalid.
 */
function signJWT(
  payload: JWTPayload,
  secretOrPrivateKey: string | Buffer | KeyObject,
  options: SignOptions = {}
): string {
  const defaultOptions: SignOptions = {
    algorithm: "HS256",
    iat: Math.floor(Date.now() / 1000),
    ...options,
  };

  const algorithms = ["HS256", "HS384", "HS512"];
  if (!algorithms.includes(defaultOptions.algorithm!)) {
    throw new Error(
      "Invalid algorithm. Supported algorithms: HS256, HS384, HS512"
    );
  }

  payload.iat = defaultOptions.iat;
  if (defaultOptions.expiresIn) {
    payload.exp = defaultOptions.iat! + parseDuration(defaultOptions.expiresIn);
  }
  if (defaultOptions.notBefore) {
    payload.nbf = defaultOptions.iat! + parseDuration(defaultOptions.notBefore);
  }

  const header = {
    alg: defaultOptions.algorithm,
    typ: "JWT",
  };
  const encodedHeader = base64url(Buffer.from(JSON.stringify(header)));
  const encodedPayload = base64url(Buffer.from(JSON.stringify(payload)));

  let key: KeyObject;
  if (
    typeof secretOrPrivateKey === "string" ||
    Buffer.isBuffer(secretOrPrivateKey)
  ) {
    key = createSecretKey(
      Buffer.isBuffer(secretOrPrivateKey)
        ? secretOrPrivateKey
        : Buffer.from(secretOrPrivateKey)
    );
  } else {
    key = secretOrPrivateKey;
  }

  const signature = createHmac("sha256", key.export())
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest("base64url");

  return `${encodedHeader}.${encodedPayload}.${signature}`;
}
