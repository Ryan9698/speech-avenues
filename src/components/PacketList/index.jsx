import React, { useState } from "react";
import { packets } from "../../data/PacketList";

export default function PacketList() {
  const [showChildren, setShowChildren] = useState(false);
  const [showAdults, setShowAdults] = useState(false);

  // Style for the dropdown content
  const dropdownContentStyle =
    "bg-white shadow-lg rounded-md p-3 mt-2 max-w-md mx-auto";

  const dropdownItemStyle =
    "border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300";

  const adultDownloadButtonStyle =
    "bg-black shadow-xl text-white py-2 px-4 rounded hover:text-white hover:bg-gradient-to-r from-indigo-500 to-purple-600 transition duration-300";

  const childDownloadButtonStyle =
    "bg-black text-white py-2 px-4 rounded hover:text-white hover:bg-gradient-to-r from-green-500 to-blue-500 transition duration-300";

  const buttonStyle =
    "font-semibold py-2 px-10 inline-block text-white rounded transition duration-300 transform hover:-translate-y-1 hover:shadow-lg w-60 h-20";

  return (
    <div className="packet-list my-8">
      <h2 className="text-2xl font-semibold cursiveFont mb-8">
        Downloadable Packets:
      </h2>

      {/* Adult Packets Dropdown */}
      <div className="text-center">
        <button
          onClick={() => setShowAdults(!showAdults)}
          className={`${buttonStyle} bg-gradient-to-r from-indigo-500 to-purple-600 hover:opacity-90`}
        >
          Adult Intake Forms
        </button>

        {showAdults && (
          <div className={`bg-purple-300 ${dropdownContentStyle}`}>
            <ul className="space-y-3">
              {packets
                .filter(
                  (packet) =>
                    packet.category === "Adults" ||
                    (Array.isArray(packet.category) &&
                      packet.category.includes("Adults"))
                )
                .map((packet) => (
                  <li
                    key={packet.id}
                    className={`bg-white ${dropdownContentStyle}`}
                  >
                    <h3 className="font-bold text-lg">{packet.title}</h3>
                    <p className="mb-2 text-gray-700">{packet.description}</p>
                    <a
                      href={packet.url}
                      download
                      className={`shadow ${adultDownloadButtonStyle}`}
                    >
                      Download
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>

      {/* Children Packets Dropdown */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowChildren(!showChildren)}
          className={`${buttonStyle} bg-gradient-to-r from-green-500 to-blue-500 hover:opacity-90`}
        >
          Child Intake Forms
        </button>

        {showChildren && (
          <div className={`bg-blue-300 ${dropdownContentStyle}`}>
            <ul className="space-y-3">
              {packets
                .filter(
                  (packet) =>
                    packet.category === "Children" ||
                    (Array.isArray(packet.category) &&
                      packet.category.includes("Children"))
                )
                .map((packet) => (
                  <li
                    key={packet.id}
                    className={`bg-white ${dropdownItemStyle}`}
                  >
                    <h3 className="font-bold text-lg">{packet.title}</h3>
                    <p className="mb-2 text-gray-700">{packet.description}</p>
                    <a
                      href={packet.url}
                      download
                      className={childDownloadButtonStyle}
                    >
                      Download
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
