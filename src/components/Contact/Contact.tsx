import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";
import ContactCard from "./ContactFieldComponent";
import INPUT_FIELDS from "./ContactFields";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function Contact(): JSX.Element {
  const [role, setRole] = useState<"client" | "university" | "student" | "">(
    ""
  );
  const form = useRef<HTMLFormElement>(null);
  const templateID = import.meta.env.VITE_TEMPLATE_ID as string;
  const serviceID = import.meta.env.VITE_SERVICE_ID as string;
  const publicID = import.meta.env.VITE_PUBLIC_ID as string;

  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  const handleRoleChange = (e: ChangeEvent<HTMLSelectElement>): void => {
    setRole(e.target.value as "client" | "university" | "student");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    if (!form.current) return;
    if (
      !(typeof serviceID === "string") ||
      !(typeof templateID === "string") ||
      !(typeof publicID === "string")
    )
      return;
    setError(false);
    setSuccess(false);
    try {
      await emailjs.sendForm(serviceID, templateID, form.current, publicID);
      setSuccess(true);
    } catch (error) {
      setError(true);
      console.log("Failed to send email,", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto py-12 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6 py-4 text-yellow-400">Contact Us</h2>
      <form
        ref={form}
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
