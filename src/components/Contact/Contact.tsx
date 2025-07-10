import React, { useState } from "react";

export const Contact: React.FC = () => {
  const [role, setRole] = useState<"client" | "university" | "student" | "">("");

  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Us</h2>
      <form className="bg-gray-900 rounded-lg p-6 mb-6">
        <label className="block mb-4 text-lg font-semibold">
          I am a
          <select
            value={role}
            onChange={e => setRole(e.target.value as "client" | "university" | "student")}
            className="ml-3 px-3 py-2 rounded bg-black text-white border border-gray-700"
          >
            <option value="">Select...</option>
            <option value="client">Client</option>
            <option value="university">University</option>
            <option value="student">Student</option>
          </select>
        </label>

        {/* Render different forms based on role */}
        {role === "client" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Company Name"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <textarea
              placeholder="How can we help your company?"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full mt-2 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </div>
        )}

        {role === "university" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="University Name"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <textarea
              placeholder="How can we partner with your university?"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full mt-2 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </div>
        )}

        {role === "student" && (
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <input
              type="text"
              placeholder="School/University"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              required
            />
            <textarea
              placeholder="Why are you interested in our program?"
              className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full mt-2 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
            >
              Submit
            </button>
          </div>
        )}
      </form>
    </div>
  );
};