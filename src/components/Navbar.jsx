import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/assets/SVG/logo.svg";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      {/* container wraps EVERYTHING */}
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image src={Logo} alt="VSR Vriksha Logo" width={150} height={50} />
        </div>

        {/* Navigation - visible on medium screens (768px) and up */}
        <nav className="hidden md:flex items-center gap-8 font-medium text-gray-600 nav-menu">
          <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link href="/programs" className="hover:text-primary transition-colors">Programs</Link>
          <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link>
          <Link href="/blogs" className="hover:text-primary transition-colors">Blogs</Link>
          <Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
        </nav>

        {/* Call Button */}
        <a href="tel:+918431004444" className="call-btn">
          +91 84310 04444
        </a>
      </div>
    </header>
  );
};

export default Navbar;