import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/logo.png'
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="w-11/12 mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Website Name */}
          <div className="flex flex-col items-center md:items-start">
            <div className=" mb-6">
              <img src={logo} className='w-20 h-20 rounded-full p-2 bg-white' alt="logo" />
            </div>
            <h2 className="text-xl font-bold">LitShelf</h2>
            <p className="text-gray-400 mt-2">Empowering your digital presence</p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Business Street</p>
            <p className="text-gray-400">City, Country 12345</p>
            <p className="text-gray-400">Email: info@litshelf.com</p>
            <p className="text-gray-400">Phone: +1 (123) 456-7890</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link to="https://facebook.com" target="_blank"  className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={24} />
              </Link>
              <Link to="https://twitter.com" target="_blank"  className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={24} />
              </Link>
              <Link to="https://instagram.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={24} />
              </Link>
              <Link to="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} LitShelf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;