import { Google_Sans_Code } from "next/font/google";
import "./globals.css";

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Firefly",
  description: "A new way of muscle rehabilitation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={googleSansCode.variable}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
