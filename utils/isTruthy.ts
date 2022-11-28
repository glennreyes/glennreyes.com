export type Truthy<T> = T extends '' | 0 | false | null | undefined ? never : T;

export function isTruthy<T>(value: T): value is Truthy<T> {
  return Boolean(value);
}
