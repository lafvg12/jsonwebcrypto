import { Duration } from "../types";

/**
 * Parses a duration string or returns the number if already in seconds.
 * @param duration - The duration to parse.
 * @returns The duration in seconds.
 * @throws Will throw an error if the duration format is invalid.
 */
export function parseDuration(duration: Duration): number {
  if (typeof duration === "number") {
    return duration;
  }
  const match = duration.match(/^(\d+)([smhdw])$/);
  if (!match) {
    throw new Error(
      'Invalid duration format. Valid formats include: "3s" (seconds), "10m" (minutes), "1h" (hour), "2d" (days), "1w" (week).'
    );
  }
  const value = parseInt(match[1], 10);
  const unit = match[2];
  switch (unit) {
    case "s":
      return value;
    case "m":
      return value * 60;
    case "h":
      return value * 3600;
    case "d":
      return value * 86400;
    case "w":
      return value * 604800;
    default:
      throw new Error(
        'Invalid duration unit. Use "s" for seconds, "m" for minutes, "h" for hours, "d" for days, "w" for weeks.'
      );
  }
}

/**
 * Converts a buffer to a base64 URL-safe string.
 * @param input - The buffer to convert.
 * @returns The base64 URL-safe string.
 */
export function base64url(input: Buffer): string {
  return input
    .toString("base64")
    .replace(/=/g, "")
    .replace(/\+/g, "-")
    .replace(/\//g, "_");
}

export function decodeJWT(token: string) {
  const [header, payload] = token.split(".");
  return JSON.parse(Buffer.from(payload, "base64url").toString());
}
