import type { Metadata } from "next";



// Radix
import { Theme } from "@radix-ui/themes";

// Styles
import "./globals.css";
import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';

// Components
import { ToastContainer } from "react-toastify";

// Layouts
import AppLayout from "@layouts/AppLayout";
import ApiKeyCheckerLayout from "@layouts/ApiKeyCheckerLayout";
import { fonts } from "@fonts/index";

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
      <body className={`dark ${fonts.outfit.className}`}>
        <Theme
          accentColor="indigo"
          grayColor="gray"
          panelBackground="solid"
          scaling="100%"
          radius="large"
          appearance="dark"
        >
          <ApiKeyCheckerLayout>
            <AppLayout>
              {children}
              <ToastContainer />
            </AppLayout>
          </ApiKeyCheckerLayout>
        </Theme>
      </body>
    </html >
  );
}
