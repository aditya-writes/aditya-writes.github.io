import "./globals.css";

export const metadata = {
  title: "Content Writer | Portfolio",
  description: "Shaping Ideas Into Words",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* We remove the geist variable classes for now to ensure CSS connectivity first */}
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}