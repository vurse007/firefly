import { DM_Mono } from "next/font/google";
import "./globals.css";

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  weight: ["300", "400", "500"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Firefly",
  description: "A new way of muscle rehabilitation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${dmMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
