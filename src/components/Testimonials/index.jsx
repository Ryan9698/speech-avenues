import React, { useState, useEffect } from "react";
import testimonials from "../../data/Testimonials";

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTestimonial(
        (prevTestimonial) => (prevTestimonial + 1) % testimonials.length
      );
    }, 4000); // Change the testimonial every 4 seconds

    return () => clearInterval(intervalId); // Clean up the interval on unmount
  }, [testimonials.length]);

  const getStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => "⭐").join(" ");
  };

  return (
    <div className="my-8 mx-auto p-4 max-w-2xl text-center">
      <p className="text-lg italic">
        "{testimonials[currentTestimonial].quote}"
      </p>
      <p className="text-md mt-4 mb-2 font-semibold">
        {testimonials[currentTestimonial].author}
      </p>
      <p className="text-yellow-400">
        {getStars(testimonials[currentTestimonial].rating)}
      </p>
    </div>
  );
};

export default Testimonials;
