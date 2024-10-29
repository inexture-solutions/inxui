import {
  type DefaultMantineColor,
  type MantineColorsTuple,
} from "@inexture/base";

export const THEME_PRIMARY = "theme" as const;
export const THEME_COLORS: Partial<
  Record<DefaultMantineColor, MantineColorsTuple>
> = {
  theme: [
    "#ffe9fb",
    "#ffd0f2",
    "#fd9de2",
    "#fd67d2",
    "#fc3dc4",
    "#fc25bb",
    "#fd19b8",
    "#e10da2",
    "#c90090",
    "#b0007d",
  ],
};
