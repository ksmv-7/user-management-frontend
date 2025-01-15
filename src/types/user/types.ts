import * as z from 'zod';
import { UserSchema } from '../../schemas/user.schema';

export type User = z.infer<typeof UserSchema> & { id: string; };
export type UserUpdatePayload = {
  name: string;
  email: string;
  phone: string;
}