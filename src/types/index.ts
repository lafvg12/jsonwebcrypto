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
