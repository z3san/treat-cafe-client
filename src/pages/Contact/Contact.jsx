import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="flex flex-col items-center h-screen justify-center py-10">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-4">
    <FaEnvelope className="text-2xl text-gray-500" />
            <a href="mailto:info@treatcafe.com" className="text-lg font-medium text-gray-700 hover:text-red-500">
              info@treatcafe.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-2xl text-gray-500" />
            <a href="tel:123-456-7890" className="text-lg font-medium text-gray-700 hover:text-red-500">
              (123) 456-7890
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-2xl text-gray-500" />
            <p className="text-lg font-medium text-gray-700">
              123 Main Street, Anytown USA
            </p>
          </div>
        </div>
      </div>
    );
};

export default Contact;