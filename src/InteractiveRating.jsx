import { useState, useRef } from "react";
import Rating from "./Rating";

export default function InteractiveRating() {
  const [value, setValue] = useState(0);
  const clicked = useRef();
  return (
    <Rating
      value={value}
      onHover={(newValue) => {
        if (!clicked.current) {
          setValue(newValue);
        }
      }}
      onClick={() => {
        clicked.current = true;
      }}
    />
  );
}
