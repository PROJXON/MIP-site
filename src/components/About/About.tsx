import React from "react";

export const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 text-white">
      {/* Story Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 py-4 text-yellow-400">Our Story</h2>
        <p className="text-gray-300">
          PROJXON was founded with a vision to bridge the gap between academic
          learning and real-world experience. Our journey began when a group of
          passionate professionals recognized the need for a platform that
          empowers young talent and organizations alike. Since then, we've been
          dedicated to designing innovative internship programs that create
          future-ready leaders and deliver measurable impact for our partners.
        </p>
      </section>

      {/* Our Approach Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Our Approach</h2>
        <p className="text-gray-300">
          We believe in hands-on, project-based learning. Our Momentum Internship
          Program (MIP) is built on collaboration, mentorship, and real consulting
          projects. We partner with companies and universities to ensure every
          participant gains practical skills, industry insights, and the confidence
          to excel in their careers. Our approach is flexible, remote-friendly,
          and tailored to the needs of both interns and organizations.
        </p>
      </section>

      {/* Meet the Team Section */}
      <section>
        <h2 className="text-3xl font-bold mb-4 text-yellow-400">Meet the Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Example team members, replace with real data as needed */}
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
            <img
              src="/team1.jpg"
              alt="Team Member 1"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-white">Mark Phelan</h3>
            <p className="text-gray-400">Founder & CEO</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
            <img
              src="/team2.jpg"
              alt="Team Member 2"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-white">John Smith</h3>
            <p className="text-gray-400">Program Director</p>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 flex flex-col items-center">
            <img
              src="/team3.jpg"
              alt="Team Member 3"
              className="w-24 h-24 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-white">Katie White</h3>
            <p className="text-gray-400">Partnerships Lead</p>
          </div>
        </div>
      </section>
    </div>
  );
};