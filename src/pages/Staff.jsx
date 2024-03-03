// StaffPage.js
import React from "react";
import staffList from "../data/staffdata/StaffList";
import StaffMember from "../components/StaffMember";

// Example data, could also be fetched from an API

export default function StaffPage() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {staffList.map((member) => (
          <StaffMember key={member.id} {...member} />
        ))}
      </div>
    </div>
  );
}
