import { useState, type JSX, type FormEvent } from 'react';
import type { ContactFormInputType } from '../../types';

const API_BASE_URL =
  typeof window !== 'undefined' && window.location.hostname === 'localhost'
    ? 'http://localhost:5050'
    : 'https://api.momentuminternshipprogram.com';

type ContactFormProps = {
  Input: ContactFormInputType;
  role: 'client' | 'university' | 'student';
};

function ContactForm({ Input, role }: ContactFormProps): JSX.Element {
  const [name, setName] = useState(''); // User's name
  const [senderOccupation, setSenderOccupation] = useState(''); // User's occupation
  const [email, setEmail] = useState(''); // User's email
  const [message, setMessage] = useState(''); // User's message
  const [heardAbout, setHeardAbout] = useState('');
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    try {
      const response = await fetch(`${API_BASE_URL}/api/email`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: 'recruiting@projxon.com',
          subject: `MIP Contact Form Submission from ${name} at ${senderOccupation}`,
          text: `From: ${name}\nEmail: <${email}>\nHow they heard about the MIP program: ${heardAbout}\nSubmission Message:\n${message}`,
          userEmail: email,
          name,
          role,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
        console.log('Failed to send email:', data.error);
      }
    } catch (err) {
      setError(true);
      console.log('Error sending email:', err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#424242] rounded-lg p-6 mb-6 h-[600px] flex flex-col w-full md:w-[500px]"
    >
      <input
        type="text"
        placeholder={Input.name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        name="name"
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700 mb-4"
        required
      />
      <input
        type="text"
        placeholder={Input.senderOccupation}
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700 mb-4"
        value={senderOccupation}
        onChange={(e) => setSenderOccupation(e.target.value)}
        name="senderOccupation" // This is used to identify the user's occupation
        required
      />
      <input
        type="email"
        placeholder={Input.email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        name="email"
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700 mb-4"
        required
      />
      <textarea
        placeholder={Input.heardAbout}
        name="heardAbout"
        value={heardAbout}
        onChange={(e) => setHeardAbout(e.target.value)}
        className="w-full flex-2 px-3 py-2 rounded bg-black text-white border border-gray-700 mb-4"
        required
      ></textarea>
      <textarea
        placeholder={Input.message}
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full flex-1 px-3 py-2 rounded bg-black text-white border border-gray-700 mb-4"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full mt-2 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
      >
        Submit
      </button>
      {success && (
        <div className="mt-4 p-3 bg-green-900 border border-green-700 rounded text-green-300">
          Successfully sent the message!
        </div>
      )}
      {error && (
        <div className="mt-4 p-3 bg-red-900 border border-red-700 rounded text-red-300">
          Failed to send email. Please email us directly or try again.
        </div>
      )}
    </form>
  );
}

export default ContactForm;
