import * as bcrypt from 'bcrypt';

export function hashPassword(plainPassword: string): string {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hashSync(plainPassword, SALT);
}

export function comparePassword(plainPassword: string, hashPassword: string) {
  return bcrypt.compareSync(plainPassword, hashPassword);
}
