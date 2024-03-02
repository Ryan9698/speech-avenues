import React from "react";
import Carousel from "../../components/Carousel";
import slides from "../../data/OTPictures";

export default function OccupationalTherapy() {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <Carousel slides={slides} />
        </div>
        {/* Main content and FAQ Sidebar */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl font-bold text-gray-800 my-4 cursiveFont">
            Occupational Therapy
          </h1>
          <div className="otContainer bg-white shadow-md rounded-lg p-6">
            <p className="text-justify mb-4">
              Occupational therapy (OT) is a branch of healthcare with
              professionals dedicated to empowering patients of all ages to
              achieve independence and enhance their quality of life through
              meaningful everyday activities, known as occupations.
            </p>
            <p className="mb-4">
              Our OT practitioners work with individuals throughout all stages
              of life who may be facing various physical, cognitive,
              developmental, or emotional challenges.
            </p>
            <p className="mb-4">
              By collaborating with patients to set personalized goals and
              develop tailored treatment plans, occupational therapy facilitates
              individuals' engagement in daily activities, promotes overall
              well-being, and maximizes independence across all life domains.
            </p>
            <p className="mb-4">
              At SATC, supporting individuals in reaching their fullest
              potential is our priority and passion.
            </p>
            <a
              href="https://www.aota.org/about/what-is-ot"
              className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Learn more about Occupational Therapy
            </a>
            <p className="mt-4 mb-4 font-medium">
              Services provided by our occupational therapists encompass a wide
              range of interventions, including: assessing and improving fine
              motor skills, balance, emotional regulation, self-care abilities,
              cognitive functions, and more.
            </p>
            <div className="mb-4">
              Additionally, our occupational therapists specialize in sensory
              integration techniques:
              <ul className="list-disc pl-5 mt-2">
                <li className="mb-2">
                  Sensory integration is the brain's ability to process and make
                  sense of sensory information.
                </li>
                <li>
                  Techniques aim to regulate sensory input, improve body
                  awareness, coordination, and overall self-regulation.
                </li>
              </ul>
            </div>
            <a
              href="https://asatonline.org/for-parents/learn-more-about-specific-treatments/sensory-integrative-therapy-sensory-integration-si-or-sit/"
              className="text-blue-500 hover:text-blue-600 transition duration-300 ease-in-out"
            >
              Learn more about Sensory Integrative Therapy
            </a>
            <p className="mt-4">
              Lastly, being able to work alongside our wonderful Speech-Language
              Pathologists (SLPs), our Occupational Therapists are able to
              support and treat individuals in improving speech, language
              techniques, communication, and expression skills by addressing
              possible underlying sensory and motor components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
