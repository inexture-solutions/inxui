import { zod } from "@inexture/hook-form/plugins/zod";

export const passRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()-_=+])[A-Za-z\d!@#$%^&*()-_=+]{6,64}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const LoginSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "This field is required" })
    .regex(emailRegex, "Must be a valid email address"),
  password: zod
    .string()
    .min(4, "Minimum 8 character is required")
    .max(64, "Max 64 characters are allowed")
    .regex(
      passRegex,
      "It must contain at least one uppercase, one lowercase, one number, and one special character.",
    ),
});

export type LoginSchemaT = zod.infer<typeof LoginSchema>;

// Explicitly specify the type for authInitials
export const loginInitials: LoginSchemaT = {
  email: "",
  password: "",
};
