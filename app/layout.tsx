import type { Metadata } from "next";

// Fonts
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

// Radix
import { Theme, ThemePanel } from "@radix-ui/themes";

// Styles
import "./globals.css";
import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { ToastContainer } from "react-toastify";

// Layouts
import AppLayout from "@layouts/AppLayout";

export const metadata: Metadata = {
  title: {
    template: "Hava Durumu | %s",
    default: "Ana Sayfa",
  },
  description: "OpenWeatherMap ile hava durumu uygulaması.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme grayColor="sand" radius="none" scaling="95%">
          <AppLayout>
            {children}
            {/* <ThemePanel  /> */}
            <ToastContainer />
          </AppLayout>
        </Theme>
      </body>
    </html>
  );
}
