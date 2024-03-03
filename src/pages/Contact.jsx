// Contact.jsx
import React from "react";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
    <div className="container mx-auto p-4">
      <div className="text-4xl font-bold mb-6 cursiveFont">Contact Us</div>
      <p className="mt-4">
        If you have any questions, comments, or concerns, please contact us by
        either phone or email. You can also fill out the form below. We
        appreciate your feedback and will get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
