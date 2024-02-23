// Import React - necessary for JSX
import React from "react";
// Assuming you have a packets array in "../../data/PacketList"
import { packets } from "../../data/PacketList";

export default function PacketList() {
  return (
    <div className="packet-list my-8">
      <h2 className="text-2xl font-semibold mb-4">Downloadable Packets</h2>
      <ul className="list-none space-y-3">
        {packets.map((packet) => (
          <li key={packet.id} className="border p-4 rounded shadow-lg">
            <h3 className="font-bold text-lg">{packet.title}</h3>
            <p className="mb-2">{packet.description}</p>
            {/* Ensure the download attribute works as expected. It might not work for cross-origin links. */}
            <a
              href={packet.url}
              download
              className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300"
            >
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
