import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../public/assets/SVG/footer-logo";

const Footer = () => {
  return (
    <footer className="bg-[#9c3f1a] text-white">
      {/* Main Footer Content */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column - Logo and Description */}
          <div className="space-y-6">
            <FooterLogo />
            <p className="text-white/90 leading-relaxed max-w-sm">
              A center for naturopathic treatment of myriad ailments. Experience the healing power of nature amidst the pristine environs.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/assets/facebook.png" 
                  alt="Facebook" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/assets/insta.png" 
                  alt="Instagram" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://www.x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/assets/x.png" 
                  alt="Twitter" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </a>
              <a 
                href="https://www.linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <Image 
                  src="/assets/linkedin.png" 
                  alt="LinkedIn" 
                  width={24} 
                  height={24}
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick links</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="/about" className="text-white/90 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/programs" className="text-white/90 hover:text-white transition-colors">
                Programs
              </Link>
              <Link href="/services" className="text-white/90 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-white/90 hover:text-white transition-colors">
                Gallery
              </Link>
              <Link href="/blogs" className="text-white/90 hover:text-white transition-colors">
                Blogs
              </Link>
              <Link href="/contact" className="text-white/90 hover:text-white transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Right Column - Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex gap-3">
                <Image 
                  src="/assets/location.png" 
                  alt="Location" 
                  width={20} 
                  height={22}
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <p className="text-white/90 leading-relaxed">
                  Irish Valley, Dharmaram Village, Near Bits Pilani campus, Keesara Mandal, Medchal District, Shamirpet, Telangana - 501301
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="flex gap-3">
                <Image 
                  src="/assets/call.png" 
                  alt="Phone" 
                  width={20} 
                  height={20}
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <div className="text-white/90">
                  <a href="tel:+918431004444" className="hover:text-white transition-colors">
                    +91 84310 04444
                  </a>
                  <span className="mx-2">|</span>
                  <a href="tel:+918905004444" className="hover:text-white transition-colors">
                    +91 89050 04444
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-3">
                <Image 
                  src="/assets/mail.png" 
                  alt="Email" 
                  width={20} 
                  height={20}
                  className="w-5 h-5 flex-shrink-0 mt-1"
                />
                <a 
                  href="mailto:contact@vsrvriksha.com" 
                  className="text-white/90 hover:text-white transition-colors"
                >
                  contact@vsrvriksha.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar - Copyright */}
      <div className="border-t border-white/20">
        <div className="container py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/80">
              © Copyright 2025 All Rights Reserved
            </p>
            <Link href="/privacy" className="text-white/80 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
