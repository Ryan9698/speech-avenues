import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // State to manage submission status and button disable
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to manage the display of the thank you message
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    // Simulate data being sent
    setIsSubmitted(true); // Disable the button after submission
    setShowThankYouMessage(true); // Show the thank you message

    // Here you would typically send the data to a server or email service
    // For demo purposes, we simulate a delay to mimic async behavior
    setTimeout(() => {
      alert("Form submitted. Check the console for data.");
      // Reset form (optional)
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      setIsSubmitted(false); // Re-enable the button after actions are complete
      setShowThankYouMessage(false); // Hide the thank you message after some time if desired
    }, 2000);
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="px-4 py-2 border rounded-md"
          required
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="px-4 py-2 border rounded-md"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email Address"
          className="px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          className="px-4 py-2 border rounded-md"
          rows="4"
          required
        ></textarea>
        {showThankYouMessage && (
          <div className="text-green-600">
            Thank you! We will reach out to you as soon as possible!
          </div>
        )}
        <button
          type="submit"
          disabled={isSubmitted}
          className={`bg-sky-500 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 ${
            isSubmitted ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700"
          }`}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
