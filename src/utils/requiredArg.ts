export type Types = 'bigint' | 'boolean' | 'function' | 'number' | 'object' | 'string' | 'symbol' | 'undefined';

/**
 * Checks if an argument is an acceptable type
 * @param arg the argument in question
 * @param name name of the argument
 * @param type type of the argument
 * @returns void
 * @throws {@link TypeError} if arg doesn't match provided type
 * @internal
 */
export function checkRequiredArg(arg: unknown, name: string, type: Types) {
  if (typeof arg === type) return;

  throw new TypeError(`Expected ${name} to be ${type} but got: ${typeof arg}`);
}
