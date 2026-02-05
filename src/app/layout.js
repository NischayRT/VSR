import Footer from "../components/footer";
import Navbar from "../components/Navbar";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />  {/* Add this line */}
      </body>
    </html>
  );
}