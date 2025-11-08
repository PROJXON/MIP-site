import React from "react";
import japaneseFight from "/assets/images/japanese-fight.jpg";
import type { PageSection } from "../../types";
import PageGoldButton from "../PageGoldButton/PageGoldButton";
import Page from "../Page/Page";
import type { ImageLink } from "../../types";

const universityLogos = [
  "/assets/images/universities/chicagotech.png",
  "/assets/images/universities/CGU.png",
  "/assets/images/universities/nyu.png",
  "/assets/images/universities/northerneastern.png",
];

export const Universities: React.FC = () => {
  const sections: PageSection[] = [
    {
      id: "carousel",
      heading: "",
      content: (
        <div className="py-12 border-t border-gray-800 text-center">
          {/* Title updated to yellow */}
          <h2 className="text-yellow-500 text-3xl font-semibold mb-10">Partner Universities</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center items-center px-4 md:px-0 max-w-6xl mx-auto">
            {universityLogos.map((logo, idx) => (
              <div
                key={idx}
                className="p-2 flex items-center justify-center transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={logo}
                  alt={`University ${idx + 1}`}
                  className="h-24 md:h-28 object-contain rounded-[4px] transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ),
    },    
    {
      id: "benefits",
      heading: "Benefits",
      content: [
        "Showcase your institution as a leader in applied learning",
        "Enhance student employability with real-world projects",
        "Access to exclusive industry insights and mentors",
        "Strengthen university-industry partnerships",
        "Boost student engagement and retention",
      ],
    },
    {
      id: "journey",
      heading: "Candidate Journey",
      content:
        "Students participate in hands-on projects, collaborate with industry professionals, and receive mentorship throughout their internship. The journey includes onboarding, project work, regular feedback, and a final showcase of achievements.",
    },
    {
      id: "success-stories",
      heading: "Success Stories",
      content: (
        <div className="space-y-8">
          <div>
            <h4 className="text-gray-300 pb-4 pt-4">Claremont Graduate University</h4>
            <p className="text-gray-300">
              Claremont Graduate University's Master's students, particularly from Information Systems & Technology, have excelled in roles like AI Analyst and Data Scientist. They bring advanced analytical skills to the program and leave with a portfolio of tangible, real-world project experience.
            </p>
          </div>
          <div>
            <h4 className="text-gray-300 pb-4">Illinois Institute of Technology</h4>
            <p className="text-gray-300">
              Students from the Illinois Institute of Technology, often from graduate programs like the MS in Project Management, thrive in our fast-paced environment. They take on key responsibilities as Project Managers and Business Analysts, gaining invaluable experience translating complex technical goals into successful project deliveries.
            </p>
          </div>
          <div>
            <h4 className="text-gray-300 pb-4">Northeastern University</h4>
            <p className="text-gray-300">
              Northeastern University's graduate students, especially from top-tier programs like Project Management and Computer Science, consistently make a major impact as interns. By taking on roles like Junior Project Manager, PMO, and Software Engineer, they gain hands-on experience while contributing directly to our core products.
            </p>
          </div>
          <div>
            <h4 className="text-gray-300 pb-4">New York University</h4>
            <p className="text-gray-300">
              New York University's top-tier talent, from graduate programs like Business Management and Data Sciences, consistently shine in highly technical roles. As AI Analysts and Junior Consultants, they apply cutting-edge academic knowledge to solve real-world challenges, gaining critical project experience in the process.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "faq",
      heading: "FAQ for Universities",
      content:
        "Have questions? Check out our FAQ or contact us for more information about partnering with Momentum.",
    },
    {
      id: "cta",
      heading: "Ready to bring momentum to your campus?",
      content: (
        <PageGoldButton
          link="https://docs.google.com/forms/u/1/d/e/1FAIpQLSfFujqNvY_1kXTUCCqfNHLLQgu-W17oXtx8Yv3-hYcoXr6X_g/viewform"
          text="Become a University Partner"
        />
      ),
    },
  ];

  return (
    <Page
      hero={{
        pic: japaneseFight as ImageLink,
        h1: "Industry-integrated learning that works",
        h2: "Bring applied experience to your students",
      }}
      sections={sections}
    />
  );
};
