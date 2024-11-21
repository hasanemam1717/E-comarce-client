
import { FaRocket, FaUserFriends, FaChartLine } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Welcome to our platform! We aim to empower users with cutting-edge solutions
            that drive success and innovation. Learn more about what we offer and our core values.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <FaRocket className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Our Mission</h3>
            <p className="text-gray-600 text-center">
              We strive to revolutionize the way businesses and individuals achieve their
              goals through innovation, commitment, and excellence.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <FaUserFriends className="text-4xl text-green-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Our Team</h3>
            <p className="text-gray-600 text-center">
              Our dedicated team is composed of experts who are passionate about delivering
              exceptional results and fostering meaningful connections.
            </p>
          </div>

          <div className="p-6 bg-white shadow-lg rounded-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
            <FaChartLine className="text-4xl text-red-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-center mb-2">Our Vision</h3>
            <p className="text-gray-600 text-center">
              To be a global leader in our field by driving sustainable growth and empowering
              communities through our innovative solutions.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">
            Join us on this journey and discover how we can help you achieve your dreams.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 hover:shadow-lg transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
