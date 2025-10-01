import React from 'react';
import goldNotecard from '/assets/images/gold-notecard.jpg';
import type { ImageLink, PageSection } from '../../types';
import PageGoldButton from '../PageGoldButton/PageGoldButton';
import Page from '../Page/Page';

export const Candidates: React.FC = () => {
  const sections: (PageSection | PageSection[])[] = [
    {
      id: 'who',
      heading: "Who It's For",
      content:
        'This program is designed for ambitious students and recent graduates who want to gain real-world experience, build their professional network, and make a tangible impact.',
    },
    [
      {
        id: 'benefits',
        heading: 'Program Benefits',
        content: [
          'Mentorship from industry professionals',
          'Remote and flexible work environment',
          'Work with real clients and projects',
          'Personal and professional growth',
          'Build your resume and portfolio',
          'Networking opportunities',
        ],
      },
      {
        id: 'learn',
        heading: 'Learn',
        content: [
          'Problem-solving and critical thinking',
          'Client communication and consulting',
          'Project management and teamwork',
          'Professionalism and leadership',
          'Industry-specific skills',
        ],
      },
    ],
    {
      id: '#voices',
      heading: 'Intern Voices',
      content: {
        quote:
          'Momentum gave me the confidence and skills to succeed in my first job after graduation.',
        name: 'Former Intern',
      },
    },
    {
      id: '#faq',
      heading: 'FAQ for Interns',
      content: 'Have questions? Check out our FAQ or contact us for more information.',
    },
    {
      id: '#apply',
      heading: 'How To Apply',
      content: (
        <>
          <p className="text-gray-300">
            Ready to launch your career? Click the button below to start your application!
          </p>
          <PageGoldButton link="https://app.dover.com/jobs/projxon" text="Apply Now" />
        </>
      ),
    },
  ];

  return (
    <Page
      hero={{
        pic: goldNotecard as ImageLink,
        h1: 'Launch your career with Momentum',
        h2: 'More than an Internship',
        p: 'Real clients, Real projects, Real growth',
      }}
      sections={sections}
    />
  );
};
