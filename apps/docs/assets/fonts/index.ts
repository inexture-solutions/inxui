import { Montserrat as BaseGoogleFont } from "next/font/google";

export const baseFont = BaseGoogleFont({
  subsets: ["latin"],
  preload: true,
  display: "swap",
  variable: "--base-font",
  weight: ["500", "600", "700"],
});
