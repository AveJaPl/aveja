import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/app/components/Header";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Filip Piątek",
  description:
    "Filip Piątek - Full-Stack Developer passionate about JavaScript, TypeScript, Next.js, and building innovative web applications.",
  openGraph: {
    title: "Filip Piątek - Full-Stack Developer",
    description:
      "Explore Filip Piątek's portfolio, featuring web development projects, skills, and experience with technologies like JavaScript, TypeScript, and Next.js.",
    url: "https://filip-piatek.netlify.app",
    images: [
      {
        url: "/me.png",
        alt: "Filip Piątek",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow p-6">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
