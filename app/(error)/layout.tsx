import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Sayfa Bulunamadı",
    description: "OpenWeatherMap ile hava durumu uygulaması.",
  };
  

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {children}
        </>
    );
}
