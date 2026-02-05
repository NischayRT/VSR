import Image from "next/image";
import Link from "next/link";
import Logo from "./logo.jsx";
const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm">
      {/* container wraps EVERYTHING */}
      <div className="container flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <Logo />

        </div>

        {/* Navigation */}
<nav className="flex justify-evenly w-3/5 hidden sm:flex items-center gap-8 px-10 text-sm font-medium text-gray-600">
          <Link href="/" className="nav-menu hover:text-primary">About Us</Link>
          <Link href="/programs" className="nav-menu hover:text-primary">Programs</Link>
          <Link href="/services" className="nav-menu hover:text-primary">Services</Link>
          <Link href="/gallery" className="nav-menu hover:text-primary">Gallery</Link>
          <Link href="/blogs" className="nav-menu hover:text-primary">Blogs</Link>
          <Link href="/contact" className="nav-menu hover:text-primary">Contact Us</Link>
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
