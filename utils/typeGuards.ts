export function isNitroError(error: unknown): error is { statusCode: number; statusMessage: string } {
  return typeof error === 'object'
    && error !== null
    && 'statusCode' in error
    && 'statusMessage' in error;
}
