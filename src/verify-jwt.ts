import { createHmac } from "./config/crypto";
import { JsonWebTokenError, TokenExpiredError } from "./lib/errors-jwt";
import { decodeJWT } from "./utils/jwt";

export function verifyJWT(
  token: string,
  secretOrPublicKey: string,
  options?: { audience?: string; issuer?: string }
) {
  try {
    const [header, payload, signature] = token.split(".");
    const data = `${header}.${payload}`;
    const computedSignature = createHmac("sha256", secretOrPublicKey)
      .update(data)
      .digest("base64url");

    if (computedSignature !== signature) {
      throw new JsonWebTokenError("Invalid token signature");
    }

    const decodedPayload = JSON.parse(
      Buffer.from(payload, "base64url").toString()
    );

    if (decodedPayload.exp && Date.now() >= decodedPayload.exp * 1000) {
      throw new TokenExpiredError(
        "Token has expired",
        new Date(decodedPayload.exp * 1000)
      );
    }

    if (
      options &&
      options.audience &&
      decodedPayload.aud !== options.audience
    ) {
      throw new JsonWebTokenError("Token audience invalid");
    }

    if (options && options.issuer && decodedPayload.iss !== options.issuer) {
      throw new JsonWebTokenError("Token issuer invalid");
    }

    return decodeJWT(token);
  } catch (err) {
    throw err;
  }
}
