import type { ContactFormInputType } from '../../types';

const contactFormFields: Record<string, ContactFormInputType> = {
  client: {
    name: 'Name',
    senderOccupation: 'Company',
    heardAbout: 'How did you hear about us?',
    message: 'How can we help your company?',
    email: 'Email',
  },
  university: {
    name: 'Name',
    senderOccupation: 'University',
    heardAbout: 'How did you hear about us?',
    message: 'How can we partner with your university?',
    email: 'Email',
  },
  student: {
    name: 'Name',
    senderOccupation: 'School/University',
    heardAbout: 'How did you hear about us?',
    message: 'Why are you interested in our program?',
    email: 'Email',
  },
};

export default contactFormFields;
