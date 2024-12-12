import { zod } from "@inexture/hook-form/plugins/zod";

export const avatarRegex = /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i;

export const FormSchema = zod.object({
  avatar: zod
    .any()
    .refine((values) => {
      if (typeof values === "string") {
        return values?.length > 0;
      }
      return true;
    }, "Avatar is required")
    .refine((files) => {
      if (typeof files === "object") {
        return files?.length > 0;
      }
      return true;
    }, "Avatar Upload is required"),
});

export type FormSchemaT = zod.infer<typeof FormSchema>;

// Updated login initials
export const formInitials: FormSchemaT = {
  avatar: null,
};
