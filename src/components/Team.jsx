import React from "react";

const Team = () => {
  const teamMembers = [
    { name: "Joy Nicholas Mangalapudi", role: "Founder, Ruah Verse" },
    { name: "JayanthSathya Gopu", role: "HR, Ruah Verse" },
    { name: "P Bhanu Saketh", role: "Back-End Developer" },
    { name: "Yogeswar", role: "Full Stack Developer" },
    { name: "Vasudharini", role: "Full Stack Developer" },
    { name: "Harini", role: "Full Stack Developer" },
  ];

  return (
    <section id="team" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Our Team</h2>
        <p className="text-gray-600 mb-10">
          Meet the people who make Ruah Verse exceptional.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-lg">{member.name}</h3>
              <p className="text-primary-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;