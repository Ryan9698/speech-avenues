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
          Speech Avenues Therapy Co is a company that provides speech and
          language services in Brevard County, Florida. We provide exceptional,
          therapy services to children and adults diagnosed with autism spectrum
          (verbal, minimally verbal and nonverbal), we also treat cerebral
          palsy, traumatic brain injury, apraxia, Down’s Syndrome, articulation,
          reading, phonological and/or articulation, stuttering and auditory
          processing disorders. We treat adults diagnosed with Apraxia, Aphasia,
          Memory disorders with diminished cognition. Augmentative and
          Alternative Communication services, (AAC), AAC device programming and
          implementation.
        </p>
        <p>Click below to watch a video about us!</p>
        <a
          href="https://youtu.be/dCoWv8yV8qk"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-decoration-none hover:underline"
        >
          Complete Healing with Speech Pathologist Gail Walter and Jane Kran
        </a>
        <p>To book an appointment, please call us at:</p>
        <div className="flex items-center">
          <PhoneIcon className="inline mr-2" />
          <span className="text-lg font-medium">321-338-2419</span>
        </div>
      </div>
    </div>
  );
}
