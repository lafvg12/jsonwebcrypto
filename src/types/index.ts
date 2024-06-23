export type TAlgorithm =
  | "md5"
  | "sha1"
  | "sha256"
  | "sha384"
  | "sha512"
  | "ripemd160"
  | "whirlpool"
  | "sha224"
  | "sha512-224"
  | "sha512-256";

export type TOutputFormat = "hex" | "base64" | "buffer";

export type ScryptOptions = {
  cost?: number;
  blockSize?: number;
  parallelization?: number;
  maxmem?: number;
};

/**
 * Type for representing duration. It can be either a number (seconds) or a string (e.g., '3d' for 3 days).
 */
export type Duration = string | number;

/**
 * Options for signing a JWT.
 */
export interface SignOptions {
  algorithm?: "HS256" | "HS384" | "HS512";
  expiresIn?: Duration;
  notBefore?: Duration;
  iat?: number;
}

/**
 * Payload interface for JWT.
 */
export interface JWTPayload {
  [key: string]: any;
  iat?: number;
  exp?: number;
  nbf?: number;
}
