// Forms.jsx

import React from "react";
import PacketList from "../components/PacketList";

export default function Forms() {
  return (
    <div>
      <div>
        <h1 className="cursiveFont">Forms</h1>
      </div>
      <p>
        Below you will find downloads for necessary forms. Please print and fill
        out the information and submit it to us when youn arrive.
      </p>
      <PacketList />
    </div>
  );
}
