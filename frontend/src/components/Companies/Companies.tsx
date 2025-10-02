import React from 'react';
import dreamBig from '/assets/images/dream-big.jpg';
import type { PageSection } from '../../types';
import PageGoldButton from '../PageGoldButton/PageGoldButton';
import Page from '../Page/Page';
import type { ImageLink } from '../../types';

export const Companies: React.FC = () => {
  const sections: PageSection[] = [
    {
      id: 'why',
      heading: 'Why host an MIP',
      content:
        "Hosting a Momentum Internship Program (MIP) connects your business with emerging talent, fresh perspectives, and innovative solutions. It's a unique way to build your future workforce and make a real impact.",
    },
    {
      id: 'how',
      heading: 'How It Works',
      content:
        'We match your business needs with motivated interns, provide onboarding and support, and ensure a seamless experience from project kickoff to completion. Our team handles the logistics so you can focus on results.',
    },
    {
      id: 'what',
      heading: 'What You Get',
      content: [
        'Brand visibility among future leaders',
        'Support from the Momentum team',
        'Fresh ideas and perspectives',
        'Access to top student talent',
        'Potential long-term hires',
      ],
    },
    {
      id: 'case',
      heading: 'Case Study',
      content: {
        quote:
          'Our MIP interns delivered a new marketing strategy that increased our engagement by 40%. We hired two of them full-time after the program!',
        name: 'Satisfied Client',
      },
    },
    {
      id: 'faq',
      heading: 'FAQ for Clients',
      content:
        'Have questions? Check out our FAQ or contact us for more information about hosting a MIP.',
    },
    {
      id: 'cta',
      heading: 'Ready to build your future team?',
      content: (
        <PageGoldButton
          link="https://share.hsforms.com/1y8K29LT1QRa1VT1u2RoWTArx61e"
          text="Design an MIP Experience"
        />
      ),
    },
  ];

  return (
    <Page
      hero={{ pic: dreamBig as ImageLink, h1: 'Future Leaders. Built for your business' }}
      sections={sections}
    />
  );
};
