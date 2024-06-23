export class JsonWebTokenError extends Error {
  constructor(message: string, error?: Error) {
    super(message);
    this.name = "JsonWebTokenError";
    if (error) {
      this.stack = error.stack;
    }
  }
}

export class TokenExpiredError extends JsonWebTokenError {
  public expiredAt: Date;

  constructor(message: string, expiredAt: Date) {
    super(message);
    this.name = "TokenExpiredError";
    this.expiredAt = expiredAt;
  }
}

export class NotBeforeError extends JsonWebTokenError {
  public date: Date;

  constructor(message: string, date: Date) {
    super(message, new Error());
    this.name = "NotBeforeError";
    this.date = date;
  }
}
