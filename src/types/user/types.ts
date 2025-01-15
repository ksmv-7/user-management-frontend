import * as z from 'zod';
import { UserSchema } from '../../schemas/user.schema';

export type User = z.infer<typeof UserSchema> & { id: string; };
export type UserCreatePayload = {
  name: string;
  email: string;
  phone: string;
}
export type UserUpdatePayload = UserCreatePayload;