const Contact = () => {
  return (
    <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-600 mb-4">
            Have questions or need help? re here to assist you. Reach out to us
            anytime!
          </p>
          <ul className="text-gray-700">
            <li className="mb-2">
              <strong>Address:</strong> 123 Main Street, City, Country
            </li>
            <li className="mb-2">
              <strong>Email:</strong> support@example.com
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> +1 (555) 123-4567
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
