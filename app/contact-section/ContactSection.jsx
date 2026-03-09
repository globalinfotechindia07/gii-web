// components/ContactSection.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white mt-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for any inquiries or collaboration opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="text-blue-400 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-400">
                  Global Infotech India Pvt. Ltd.<br />
                  1st Floor, Tech Park<br />
                  Mumbai, Maharashtra - 400001
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="text-blue-400 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Phone</h3>
                <p className="text-gray-400">+91 1234567890</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="text-blue-400 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Email</h3>
                <p className="text-gray-400">info@globalinfotech.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Clock className="text-blue-400 flex-shrink-0" size={24} />
              <div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
            />
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-400 text-white"
            ></textarea>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;