import type { ContactFormInputType } from './ContactFormInputType';

const contactFormFields: Record<string, ContactFormInputType> = {
    client: {
        name: 'Name',
        senderOccupation: 'Company',
        message: 'How can we help your company?',
        email: 'Email',
    },
    university: {
        name: 'Name',
        senderOccupation: 'University',
        message: 'How can we partner with your university?',
        email: 'Email',
    },
    student: {
        name: 'Name',
        senderOccupation: 'School/University',
        message: 'Why are you interested in our program?',
        email: 'Email',
    }
};

export default contactFormFields;