import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const popins = Poppins({
   subsets: ["latin"],
   weight:["400","500","600","700"],
   variable:"--font-popins"
});

 

export const metadata: Metadata = {
  title: "Event Management",
  description: "This is EVent Management",
  icons:"./assets/images/logo.svg"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <ClerkProvider>

    <html lang="en">
    <body>
            
         
          {children}
        </body>
    </html>
    </ClerkProvider>

  );
}
