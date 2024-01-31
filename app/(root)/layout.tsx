// Libs
import type { Metadata } from "next";

// Layouts
import { fonts } from "@fonts/index";
import Menu from "@layouts/Menu";

export const metadata: Metadata = {
  title: "API Anahtarı Kontrolü",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${fonts.outfit.className} app-container bg-dark`}>

      <main className="content">
        {children}
      </main>
      {/* <Menu /> */}



    </div>
  );
}
