import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const font = Instrument_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "DevLinks",
  description: "a link sharing platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-slate-100 text-darkgray text-base m-6`}>
        {children}
      </body>
    </html>
  );
}
