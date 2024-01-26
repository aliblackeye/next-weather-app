import type { Metadata } from "next";

// Layouts
import ApiKeyCheckerLayout from "@layouts/ApiKeyCheckerLayout";

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
    <>
      <ApiKeyCheckerLayout>
        {children}
      </ApiKeyCheckerLayout>
    </>
  );
}
