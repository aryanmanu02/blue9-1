import React from "react";

const Contact = () => {
  const instagramUsername = "Blue9.tech"; // Replace with actual Instagram username
  const instagramLink = "https://www.instagram.com/Blue9.tech"; // Replace with actual Instagram link
  const linkedinUsername = "bluetech_media"; // Replace with actual LinkedIn username
  const linkedinLink = "https://www.linkedin.com/in/bluetech_media"; // Replace with actual LinkedIn link

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Connect with Us</h1>
      <div className="flex gap-6">
        {/* Instagram Box */}
        <div className="bg-white p-20 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full font-serif text-xl">
          <i className="fab fa-instagram text-5xl text-pink-600"></i>
          <h2 className="text-xl font-semibold">Instagram</h2>
          <p className="text-gray-700">Username:</p>
          <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {instagramUsername}
          </a>
        </div>
        {/* LinkedIn Box */}
        <div className="bg-white p-20 rounded-lg shadow-lg flex flex-col items-center space-y-4 max-w-xs w-full font-serif text-xl">
          <i className="fab fa-linkedin text-5xl text-blue-700"></i>
          <h2 className="text-xl font-semibold">LinkedIn</h2>
          <p className="text-gray-700">Username:</p>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {linkedinUsername}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
