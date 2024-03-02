import React from "react";
import Carousel from "../../components/Carousel";
import slides from "../../data/SpeechPictures";

export default function SpeechTherapy() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-5">
          <Carousel slides={slides} />
        </div>
        {/* Main content and FAQ Sidebar */}
        <div className="lg:col-span-7">
          <h1 className="cursiveFont text-4xl font-bold text-gray-800 my-4">
            Speech Therapy
          </h1>

          <p className="text-justify flex text-wrap">
            Our speech therapy services are dedicated to enhancing
            communication, cognitive communication, language development,
            articulation, voice, swallowing, feeding, and both expressive and
            receptive language skills. Our Speech-Language Pathologists
            specialize in Augmentative and Alternative Communication (AAC) and
            offer AAC device services and training. This approach revolutionizes
            the way individuals express themselves, utilizing innovative
            technology solutions.
          </p>
          <p className="mt-4 text-justify lg:col-start-1 lg:col-span-7 lg:row-start-2">
            We go above and beyond to ensure communication thrives in every
            setting by customizing and programming devices, as well as providing
            device training. We tailor communication strategies to break
            barriers and foster independence, ensuring that each client can
            reach their full potential.
          </p>
          <p className="italic mt-4 text-justify">
            “The most important thing in communication is hearing what isn't
            being said.” - Peter Drucker
          </p>

          {/* FAQ Sidebar now integrated into the main flow for better wrapping */}
          <div className="mt-8 lg:col-start-1 lg:col-span-12 lg:row-start-3">
            <details className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <summary className="text-lg font-semibold cursor-pointer">
                What Is Speech?
              </summary>
              <div className="mt-2 text-base text-gray-600">
                <p>
                  Speech is the expressive production of sounds and involves a
                  highly coordinated motor process of breathing, voice
                  production, and articulation of the mouth, lips, and tongue.
                  It's a vital part of human communication and includes several
                  key components:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="mt-2">
                    <strong>Articulation:</strong> This refers to the way we
                    produce individual sounds and words. Precise movement of the
                    mouth, lips, and tongue is necessary to form sounds
                    accurately. For instance, to say the word "rabbit," we must
                    be able to produce the "r" sound clearly instead of
                    misarticulating it as "wabbit."
                  </li>
                  <li>
                    <strong>Voice:</strong> This involves using our vocal folds
                    and breathing to produce sounds. The quality of our voice
                    can vary in loudness and pitch. Strain or damage to the
                    vocal folds can occur from excessive talking, yelling, or
                    persistent coughing, leading to vocal issues.
                  </li>
                  <li>
                    <strong>Fluency:</strong> Fluency is the flow and rhythm of
                    speech. It's how smoothly sounds, syllables, words, and
                    phrases are joined together when we talk. Disfluencies occur
                    when this flow is interrupted by repeated sounds, syllables,
                    or by pausing mid-speech. Stuttering is one type of fluency
                    disorder characterized by frequent disfluencies.
                  </li>
                </ul>
                <p className="mt-4">
                  Understanding and addressing issues in these areas is crucial
                  for effective communication. Speech-language pathologists
                  specialize in diagnosing and treating various speech disorders
                  to help individuals communicate clearly and confidently.
                </p>
              </div>
            </details>
            {/* Add more <details> components for additional FAQs */}
            <details className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <summary className="text-lg font-semibold">
                What is a Speech Disorder?
              </summary>
              <div className="mt-2 text-base text-gray-600 space-y-3">
                <p>
                  A speech disorder refers to difficulties in producing sounds
                  correctly, speaking fluently, or using one's voice
                  effectively. Articulatory distortions can arise from organic
                  causes—those with a known physical origin—such as hearing
                  loss, cleft palate, cerebral palsy, apraxia, or dysarthria, or
                  from functional causes, where no physical cause is identified.
                  An articulation disorder is typically diagnosed when errors
                  persist across four to six phonemes. Phonemes are the smallest
                  units of sound in a language that differentiate meaning
                  between words, such as consonants and vowels.
                </p>

                <p>
                  Phonological development is a critical aspect of a child’s
                  growth, encompassing the processes by which a child learns to
                  segment and differentiate various sounds into recognizable
                  units. During this period, a child interprets a continuous
                  flow of sounds, gradually discerning and isolating individual
                  words, and associating each with meaning drawn from
                  environmental cues and verbal interactions. Children pass
                  through distinct stages of phoneme acquisition, allowing
                  speech pathologists to determine whether a child’s
                  phonological development falls within typical patterns.
                </p>

                <p>
                  As part of their natural linguistic progression, children
                  attempt to emulate adult speech, employing phonological
                  strategies while they master specific sounds. If a child does
                  not acquire a particular sound within the expected
                  developmental timeline, they may persist in imitating,
                  omitting, or distorting the sound in an effort to approximate
                  it as closely as possible.
                </p>
              </div>
            </details>

            <details className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
              <summary className="text-lg font-semibold">
                What is Augmentative and Alternative Communication (AAC)?
              </summary>
              <div className="mt-2 text-base text-gray-600 space-y-4">
                <p>
                  AAC is employed by individuals who cannot always depend on
                  speech. It includes various forms of communication, from
                  gestures and sign language to the use of specialized
                  communication devices. AAC empowers those with significant
                  expressive language impairments to communicate more
                  effectively and encompasses both unaided methods, like manual
                  signs, and aided methods, such as speech-generating devices.
                </p>
                <p>
                  To learn more about AAC and its benefits,{" "}
                  <a
                    href="https://www.asha.org/njc/aac/#:~:text=Augmentative%20and%20alternative%20communication%20(AAC)%20describes%20multiple%20ways%20to%20communicate,with%20severe%20expressive%20communication%20disorders."
                    target="_blank" // Open in a new tab
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline inline-block mt-1" // Add margin-top if needed
                  >
                    Click here.
                  </a>
                </p>
              </div>
            </details>
          </div>
        </div>
        {/* <div className="w-full md:w-1/2 4k:w-1/3">
          <Carousel />
        </div> */}
      </div>
    </div>
  );
}
