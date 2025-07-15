import type { JSX } from "react";
import type { InputField } from "./InputFieldType";

type ContactProps = {
  Input: InputField;
};

function ContactCard({ Input }: ContactProps): JSX.Element {
  return (
    <>
      <input
        type="text"
        placeholder={Input.senderOccupation}
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
        required
      />
      <input
        type="text"
        placeholder={Input.name}
        name="name"
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
        required
      />
      <input
        type="text"
        placeholder={Input.email}
        name="email"
        className="w-full px-3 py-2 rounded bg-black text-white border border-gray-700"
        required
      />
      <input
        type="text"
        placeholder={Input.description}
        name="description"
        style={{ height: "30px" }}
        className="w-full h-[30px] px-3 py-2 rounded bg-black text-white border border-gray-700"
        required
      />
      <button
        type="submit"
        className="w-full mt-2 bg-yellow-500 text-black font-semibold py-2 rounded hover:bg-yellow-400 transition"
      >
        Submit
      </button>
    </>
  );
}

export default ContactCard;
