import React from "react";
import { Outlet } from "react-router-dom";
import SpeechTherapy from "./Therapy/SpeechTherapy";
import OccupationalTherapy from "./Therapy/OccupationalTherapy";
import PhysicalTherapy from "./Therapy/PhysicalTherapy";

export default function Therapy() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
