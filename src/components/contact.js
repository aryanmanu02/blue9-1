import React from "react";
import { Input } from "@/components/Input"; // Adjust the import path as needed

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />

        <h1 className="text-2xl font-bold mb-6">Message Me</h1>

        <div className="mb-4">
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full"
          />
        </div>

        <div className="mb-4">
          <Input
            type="text"
            name="message"
            placeholder="Your Message"
            className="w-full"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
