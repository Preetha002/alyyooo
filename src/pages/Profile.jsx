import React, { useState } from "react";

const Profile = () => {
  const [formData, setFormData] = useState({
    firstName: "Priya.P",
    lastName: "",
    headline: "",
    biography: "",
    language: "English (US)",
    website: "",
    facebook: "",
    instagram: "",
    linkedin: "",
    tiktok: "",
    x: "",
    youtube: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile saved successfully! ✅");
    console.log("Profile Data:", formData);
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-purple-600 via-blue-500 to-purple-700 text-white p-8">
      <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg">
        <h1 className="text-2xl font-bold mb-6">Public Profile</h1>

        {/* Basics Section */}
        <div className="space-y-4 mb-8">
          <h2 className="text-lg font-semibold">Basics:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
          </div>
          <input
            type="text"
            name="headline"
            value={formData.headline}
            onChange={handleChange}
            placeholder="Headline"
            maxLength="60"
            className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
          />
        </div>

        {/* Biography Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Biography</h2>
          <textarea
            name="biography"
            value={formData.biography}
            onChange={handleChange}
            placeholder="Write your biography..."
            rows="4"
            className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
          />
          <p className="text-xs text-gray-300 mt-1">
            Links and coupon codes are not permitted in this section.
          </p>
        </div>

        {/* Language Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-2">Language</h2>
          <select
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="px-4 py-2 rounded-lg bg-white/20 outline-none text-white w-full"
          >
            <option className="text-black">English (US)</option>
            <option className="text-black">English (UK)</option>
            <option className="text-black">Hindi</option>
            <option className="text-black">Tamil</option>
            <option className="text-black">French</option>
          </select>
        </div>

        {/* Links Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Links</h2>
          <div className="space-y-3">
            <input
              type="text"
              name="website"
              value={formData.website}
              onChange={handleChange}
              placeholder="Website (http://..)"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="facebook"
              value={formData.facebook}
              onChange={handleChange}
              placeholder="facebook.com/ Username"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="instagram.com/ Username"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              placeholder="linkedin.com/ Public Profile URL"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="tiktok"
              value={formData.tiktok}
              onChange={handleChange}
              placeholder="tiktok.com/ @Username"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="x"
              value={formData.x}
              onChange={handleChange}
              placeholder="x.com/ Username"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
            <input
              type="text"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              placeholder="youtube.com/ Username"
              className="w-full px-4 py-2 rounded-lg bg-white/20 outline-none text-white"
            />
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
