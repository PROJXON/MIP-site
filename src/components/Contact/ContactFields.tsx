import type { InputField } from "./InputFieldType";

const INPUT_FIELDS: Record<string, InputField> = {
    client: {
        name: "Name",
        senderOccupation: "Company Name",
        description: "How can we help your company?",
        email: "Email",
    },
    university: {
        name: "Name",
        senderOccupation: "University",
        description: "How can we partner with your university?",
        email: "Email",
    },
    student: {
        name: "Name",
        senderOccupation: "School/University",
        description: "Why are you interested in our program?",
        email: "Email",
    }
}

export default INPUT_FIELDS;