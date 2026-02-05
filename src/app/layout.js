// src/app/layout.js
import "./globals.css";

export const metadata = {
  title: "VSR Vriksha",
  description: "Nature Cure Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* 3. Add the font class here */}
      <body >
        {children}
      </body>
    </html>
  );
}