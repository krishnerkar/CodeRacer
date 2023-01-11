import { Inter } from "@next/font/google";
import { Source_Code_Pro } from "@next/font/google";
import localFont from "@next/font/local";

export const source_code = Source_Code_Pro({
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const inter = Inter({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});


export const calSans = localFont({
  src: "../fonts/CalSans-SemiBold.woff",
  display: "swap",
});

export const matter = localFont({
  src: [
    {
      path: "../fonts/Matter-Light.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Medium.woff",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Matter-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});