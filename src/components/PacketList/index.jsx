import React, { useState } from "react";
import { packets } from "../../data/PacketList";

export default function PacketList() {
  const [showChildren, setShowChildren] = useState(false);
  const [showAdults, setShowAdults] = useState(false);

  // Style for the dropdown content
  const dropdownContentStyle =
    "bg-white shadow-lg rounded-md p-3 mt-2 max-w-md mx-auto";

  return (
    <div className="packet-list my-8">
      <h2 className="text-2xl font-semibold mb-4">Downloadable Packets</h2>

      {/* Adult Packets Dropdown */}
      <div className="text-center">
        <button
          onClick={() => setShowAdults(!showAdults)}
          className="font-semibold py-2 mb-2 inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-4 rounded hover:opacity-90 transition duration-300"
        >
          Adult Intake Forms
        </button>

        {showAdults && (
          <div className={dropdownContentStyle}>
            <ul className="space-y-3">
              {packets
                .filter(
                  (packet) =>
                    packet.category === "Adults" ||
                    (Array.isArray(packet.category) &&
                      packet.category.includes("Adults"))
                )
                .map((packet) => (
                  <li key={packet.id} className="border p-4 rounded-lg">
                    <h3 className="font-bold text-lg">{packet.title}</h3>
                    <p className="mb-2">{packet.description}</p>
                    <a
                      href={packet.url}
                      download
                      className="bg-black text-white py-2 px-4 rounded hover:bg-red-700 transition duration-300"
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
          className="font-semibold py-2 mb-2 inline-block bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 rounded hover:opacity-90 transition duration-300"
        >
          Children Intake Forms
        </button>

        {showChildren && (
          <div className={dropdownContentStyle}>
            <ul className="space-y-3">
              {packets
                .filter(
                  (packet) =>
                    packet.category === "Children" ||
                    (Array.isArray(packet.category) &&
                      packet.category.includes("Children"))
                )
                .map((packet) => (
                  <li key={packet.id} className="border p-4 rounded-lg">
                    <h3 className="font-bold text-lg">{packet.title}</h3>
                    <p className="mb-2">{packet.description}</p>
                    <a
                      href={packet.url}
                      download
                      className="bg-black text-white py-2 px-4 rounded hover:bg-blue-700 hover:text-white transition duration-300"
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
