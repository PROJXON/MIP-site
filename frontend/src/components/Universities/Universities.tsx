import React from 'react';
import japaneseFight from '/assets/images/japanese-fight.jpg';
import type { PageSection } from '../../types';
import PageGoldButton from '../PageGoldButton/PageGoldButton';
import Page from '../Page/Page';
import type { ImageLink } from '../../types';

export const Universities: React.FC = () => {
  const sections: PageSection[] = [
    {
      id: 'benefits',
      heading: 'Benefits',
      content: [
        'Showcase your institution as a leader in applied learning',
        'Enhance student employability with real-world projects',
        'Access to exclusive industry insights and mentors',
        'Strengthen university-industry partnerships',
        'Boost student engagement and retention',
      ],
    },
    {
      id: 'journey',
      heading: 'Candidate journey',
      content:
        'Students participate in hands-on projects, collaborate with industry professionals, and receive mentorship throughout their internship. The journey includes onboarding, project work, regular feedback, and a final showcase of achievements.',
    },
    {
      id: 'stories',
      heading: 'Sample Success Stories',
      content: {
        quote:
          'Our students gained invaluable experience and landed top jobs after graduation thanks to the Momentum Internship Program',
        name: 'University Partner',
      },
    },
    {
      id: 'faq',
      heading: 'FAQ for Universities',
      content:
        'Have questions? Check out our FAQ or contact us for more information about partnering with Momentum.',
    },
    {
      id: 'cta',
      heading: 'Ready to bring momentum to your campus?',
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
        h1: 'Industry-integrated learning that works',
        h2: 'Bring applied experience to your students',
      }}
      sections={sections}
    />
  );
};
