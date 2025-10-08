import "./globals.css";

export const metadata = {
  title: "Netflix UI Clone",
  description: "Diseño simplificado con Next.js y Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-neutral-950 text-white">{children}</body>
    </html>
  );
}
