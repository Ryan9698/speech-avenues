import React from "react";

export default function SpeechTherapy() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Main content */}
        <div className="flex-1">
          <h1 className="cursiveFont text-3xl font-bold mb-4">
            Speech Therapy
          </h1>
          <p>
            Our speech therapy services are dedicated to enhancing
            communication, cognitive communication, language development,
            articulation, voice, swallowing, feeding, and both expressive and
            receptive language skills. Our Speech-Language Pathologists
            specialize in Augmentative and Alternative Communication (AAC) and
            offer AAC device services and training. This approach revolutionizes
            the way individuals express themselves, utilizing innovative
            technology solutions.
          </p>
          <p className="mt-4">
            We go above and beyond to ensure communication thrives in every
            setting by customizing and programming devices, as well as providing
            device training. We tailor communication strategies to break
            barriers and foster independence, ensuring that each client can
            reach their full potential.
          </p>
          <p className="italic mt-4">
            “The most important thing in communication is hearing what isn't
            being said.” - Peter Drucker
          </p>
        </div>

        {/* FAQ Sidebar */}
        <div className="w-full md:w-1/3 lg:w-1/4 p-4">
          <details className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <summary className="text-lg font-semibold">What is Speech?</summary>
            <div className="mt-2 text-base text-gray-600">
              <p>
                Speech is produced with the goal of the listener’s perception.
                Accurate and precise articulation requires an alignment of exact
                placement, timing, direction, and force of the articulators in
                conjunction with air steam adjustments, initiation or stopping
                of phonation (the process of the making sound in the vocal
                folds) and velopharyngeal action. Speech is comprised of
                integration of the body (i.e. neuromuscular, musculoskeletal,
                central, and peripheral systems) and brain (i.e.
                Neurocognitive). This integration begins at the conception of
                thought, feeling or emotion that is intended to communicate.
                This is message must follow the language rules it is spoken in
                being conveyed into verbal symbols. The message is sent to the
                neuromuscular system for execution is sequenced by the
                sensorimotor system which activate the speech muscles for
                appropriate timing, duration, and intensity. Finally, the
                message is sent to the central and peripheral systems for
                regulation and execution by innervating the respiratory,
                phonology, resonatory and articulatory systems in a way turning
                that the combination of the muscles form an acoustic signal that
                is perceived by another person.
              </p>
            </div>
          </details>
          {/* Add more <details> components for additional FAQs */}
          <details className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
            <summary className="text-lg font-semibold">
              What is a Speech Disorder?
            </summary>
            <div className="mt-2 text-base text-gray-600">
              <p>
                A speech disorder refers to difficulties in producing sounds
                correctly, speaking fluently, or using one's voice effectively.
                Articulatory distortions can arise from organic causes—those
                with a known physical origin—such as hearing loss, cleft palate,
                cerebral palsy, apraxia, or dysarthria, or from functional
                causes, where no physical cause is identified. An articulation
                disorder is typically diagnosed when errors persist across four
                to six phonemes. Phonemes are the smallest units of sound in a
                language that differentiate meaning between words, such as
                consonants and vowels.
              </p>

              <p>
                Phonological development is a critical aspect of a child’s
                growth, encompassing the processes by which a child learns to
                segment and differentiate various sounds into recognizable
                units. During this period, a child interprets a continuous flow
                of sounds, gradually discerning and isolating individual words,
                and associating each with meaning drawn from environmental cues
                and verbal interactions. Children pass through distinct stages
                of phoneme acquisition, allowing speech pathologists to
                determine whether a child’s phonological development falls
                within typical patterns.
              </p>

              <p>
                As part of their natural linguistic progression, children
                attempt to emulate adult speech, employing phonological
                strategies while they master specific sounds. If a child does
                not acquire a particular sound within the expected developmental
                timeline, they may persist in imitating, omitting, or distorting
                the sound in an effort to approximate it as closely as possible.
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
                expressive language impairments to communicate more effectively
                and encompasses both unaided methods, like manual signs, and
                aided methods, such as speech-generating devices.
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
    </div>
  );
}
