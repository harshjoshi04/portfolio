import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harsh Joshi Portfolio",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@400&f[]=quicksand@400&f[]=pilcrow-rounded@400&display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body className={inter.className}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
