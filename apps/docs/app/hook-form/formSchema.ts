import { zod } from "@inexture/hook-form/plugins/zod";

export const avatarRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

export const LoginSchema = zod.object({
  avatar: zod
    .union([
      zod
        .string()
        .nullable()
        .refine(
          (value) => value === null || avatarRegex.test(value),
          "Avatar must be a valid file format (jpg, jpeg, png, gif, bmp, webp, svg).",
        ),
      zod
        .instanceof(File)
        .nullable()
        .refine(
          (file) => file === null || avatarRegex.test(file.name.toLowerCase()),
          "Avatar must be a valid file format (jpg, jpeg, png, gif, bmp, webp, svg).",
        ),
    ])
    .nullable(),
});

export type LoginSchemaT = zod.infer<typeof LoginSchema>;

// Updated login initials
export const loginInitials: LoginSchemaT = {
  avatar: null,
};
