import * as z from 'zod';

export const UserSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().nonempty("Phone number is required"),
});
