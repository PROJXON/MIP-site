import { useState, type JSX } from 'react';
import ContactForm from './ContactForm';
import contactFormFields from './ContactFormFields'; // This should export your inputFields object

export function Contact(): JSX.Element {
  const [role, setRole] = useState<'client' | 'university' | 'student' | ''>('');

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRole(e.target.value as 'client' | 'university' | 'student');
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Us</h2>
      <label className="block mb-4 text-lg font-semibold">
        I am a
        <select
          value={role}
          onChange={handleRoleChange}
          className="ml-3 px-3 py-2 rounded bg-black text-white border border-gray-700"
        >
          <option value="">Select...</option>
          <option value="client">Client</option>
          <option value="university">University</option>
          <option value="student">Student</option>
        </select>
      </label>
      {role && <ContactForm Input={contactFormFields[role]} role={role} />}
    </div>
  );
}

export default Contact;
