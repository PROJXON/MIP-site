import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import ContactCard from "./ContactFieldComponent";
import INPUT_FIELDS from "./ContactFields";
import { useRef } from "react";

export function Contact(): JSX.Element {
  const [role, setRole] = useState<"client" | "university" | "student" | "">("");
  const [email, setEmail] = useState(""); // User's email
  const [message, setMessage] = useState(""); // User's message
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRole(e.target.value as "client" | "university" | "student");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    // Send form data to backend
    try {
      const response = await fetch("http://localhost:5050/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "recruiting@projxon.com", //sends the form to projxon email //sens to the backend
          subject: `Contact Form Submission (${role})`,
          text: `From: ${email}\n\n${message}`,
          userEmail: email, // Include user's email
        }),
      });
      const data = await response.json();
      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
        console.log("Failed to send email:", data.error);
      }
    } catch (err) {
      setError(true);
      console.log("Error sending email:", err);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6 text-yellow-400">Contact Us</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 rounded-lg p-6 mb-6"
      >
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
        {/* Example email and message fields */}
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="block w-full mb-4 px-3 py-2 rounded bg-black text-white border border-gray-700"
          required
        />
        <textarea
          placeholder="Your message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="block w-full mb-4 px-3 py-2 rounded bg-black text-white border border-gray-700"
          required
        />
        {/* ...your ContactCard and role-specific fields here... */}
        {role === "client" && (
          <div className="space-y-4">
            <ContactCard Input={INPUT_FIELDS.client} />
          </div>
        )}
        {role === "university" && (
          <div className="space-y-4">
            <ContactCard Input={INPUT_FIELDS.university} />
          </div>
        )}
        {role === "student" && (
          <div className="space-y-4">
            <ContactCard Input={INPUT_FIELDS.student} />
          </div>
        )}
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded font-semibold hover:bg-yellow-400 transition"
        >
          Send
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
    </div>
  );
}
