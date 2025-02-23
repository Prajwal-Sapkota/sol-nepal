"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 27.7172, 
  lng: 85.3240,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto p-6">
        <div id="mapSection" className="my-10">
          <LoadScript googleMapsApiKey="AIzaSyDLEjG7mdJiXU5npVu01Z5B9QsRrkeI8S8">
            <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
              <Marker position={center} />
            </GoogleMap>
          </LoadScript>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="p-6 border shadow-md rounded-lg bg-primary text-white">
            <h3 className="text-lg font-semibold flex items-center text-dark">
              <FaMapMarkerAlt className="mr-2" /> Headquarter
            </h3>
            <p className="text-dark">Society of Otolaryngologists of Nepal</p>
            <p className="text-dark">Nepal Medical Association Building</p>
            <p className="text-dark">Exhibition Road, Kathmandu, Nepal</p>
            <p className="text-dark">GPO Box 14351</p>
          </div>
          <div className="p-6 border shadow-md rounded-lg bg-primary text-white">
            <h3 className="text-lg font-semibold flex items-center text-dark">
              <FaPhoneAlt className="mr-2" /> Contact Information
            </h3>
            <p className="text-dark">Phone: +977-1-015919214</p>
            <p className="text-dark">Email: secretariat@solnepal.org.np</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-white shadow-md p-6 rounded-lg mt-10">
          <h2 className="text-2xl font-semibold text-center mb-4 text-dark">Send Us a Message</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
            <input 
              type="text" 
              name="name" 
              placeholder="Name" 
              className="p-3 border rounded-lg w-full focus:ring-primary focus:border-primary text-black bg-white"
              value={formData.name}
              onChange={handleChange} 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input 
              type="email" 
              name="email" 
              placeholder="Email" 
              className="p-3 border rounded-lg w-full focus:ring-primary focus:border-primary text-black bg-white"
              value={formData.email}
              onChange={handleChange} 
            />
            <input 
              type="text" 
              name="address" 
              placeholder="Address" 
              className="p-3 border rounded-lg w-full focus:ring-primary focus:border-primary text-black bg-white"
              value={formData.address}
              onChange={handleChange} 
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <input 
              type="text" 
              name="mobile" 
              placeholder="Mobile Number" 
              className="p-3 border rounded-lg w-full focus:ring-primary focus:border-primary text-black bg-white"
              value={formData.mobile}
              onChange={handleChange} 
            />
          </div>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            className="p-3 border rounded-lg w-full mt-4 focus:ring-primary focus:border-primary text-black bg-white"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button 
            type="button" 
            className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary-dark"
            disabled
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
