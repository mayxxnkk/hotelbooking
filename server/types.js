import { z } from "zod";

export const createUser = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string()
}).superRefine(({ confirmPassword, password }, ctx) => {
  if (confirmPassword !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});
