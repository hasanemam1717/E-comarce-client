const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-10">
          {/* Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">TrendLoop</h3>
              <p className="text-sm">
                We bring you the best deals and products right at your fingertips.
              </p>
            </div>
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-gray-400">Home</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-gray-400">Contact</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-gray-400">FAQ</a>
                </li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h3 className="text-lg font-bold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#blog" className="hover:text-gray-400">Blog</a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-gray-400">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-gray-400">Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* Subscribe Section */}
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe</h3>
              <p className="text-sm mb-4">Stay updated with our latest news and offers.</p>
              <form className="flex items-center space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-800 rounded focus:outline-none"
                />
                <button className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-500">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          {/* Bottom Section */}
          <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
            <p>&copy; 2024 YourCompany. All rights reserved Hasan Emam.</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  