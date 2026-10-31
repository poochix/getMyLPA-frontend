export class ApiError extends Error {
  public readonly statusCode: number;
  public readonly code?: string;
  public readonly details?: unknown;

  constructor({
    message,
    statusCode,
    code,
    details,
  }: {
    message: string;
    statusCode: number;
    code?: string;
    details?: unknown;
  }) {
    super(message); //does the work of this.message

    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.code = code;
    this.details = details;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}
