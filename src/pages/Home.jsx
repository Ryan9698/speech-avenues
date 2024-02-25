import React from "react";
import PhoneIcon from "../components/PhoneIcon";

export default function Home() {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0">
      <img
        src="/images/logo.jpg"
        alt="Logo"
        className="w-full md:w-1/2 mb-6 md:mb-0 md:mr-6"
      />
      <div className="prose prose-lg max-w-none md:w-1/2">
        <h1
          className="text-4xl font-bold mb-6"
          style={{ fontFamily: '"Dancing Script", cursive' }}
        >
          Who We Are
        </h1>
        <p>
          Welcome to Speech Avenues Therapy Co. (S.A.T.C), where we redefine
          possibilities through our professional speech and occupational therapy
          services. Our dedicated family of therapists is committed to enhancing
          communication skills and promoting functional independence for
          individuals across all age groups.
        </p>
        <p>
          At S.A.T.C, we understand that every individual is unique. Our
          therapists are dedicated to assisting each client by creating
          carefully tailored Therapy Care Plans, reflecting our commitment to
          personalized care. Our compassionate approach and cutting-edge
          techniques have proven to unlock our clients' full potential,
          nurturing growth, and empowering them to overcome challenges while
          enhancing their unique special abilities.
        </p>
        <p>For inquiries or to book an appointment, please call</p>
        <div className="flex items-center">
          <PhoneIcon className="inline mr-2" />

          <a
            href="tel:+13213382419"
            className="text-lg font-medium no-underline"
          >
            321-338-2419
          </a>
        </div>
      </div>
    </div>
  );
}
