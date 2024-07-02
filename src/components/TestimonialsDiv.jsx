import "./TestimonialsDiv.css";
import { useState } from "react";
import TestiesForm from "./TestisForm";
import TestiesFormSpread from "./TestiesFormSpread";

export default function TestimonialsDiv({
  username,
  review,
  rating,
  favoriteBurger,
}) {
  const [showTestimonials, setShowTestimonials] = useState(false);
  return (
    <>
      <h1>Testimonials</h1>

      <TestiesFormSpread />

      <div>
        <h2
          onClick={() => {
            setShowTestimonials(!showTestimonials);
          }}
        >
          {username}
        </h2>
        {showTestimonials ? (
          <>
            <p>{review}</p>
            <p>{rating}</p>
            <p>{favoriteBurger}</p>
          </>
        ) : null}
      </div>
    </>
  );
}
