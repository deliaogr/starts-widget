import React from "react";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import HalfStar from "./HalfStar";

const Rating = (props) => {
  let fullStars = [];
  let emptyStars = [];

  let lastStarInteger = Math.floor(props.value);

  for (let i = 0; i < Math.floor(props.value); i++) {
    fullStars.push(
      <StarFilled
        onMouseEnter={() => props.onHover(i + 1)}
        onClick={() => props.onClick()}
      />
    );
  }

  let emptyStarsLength = 5 - props.value;

  let lastStarDecimal = props.value - lastStarInteger;

  if (lastStarDecimal >= 0.25 && lastStarDecimal < 0.75) {
    fullStars.push(<HalfStar />);
    emptyStarsLength--;
  } else if (lastStarDecimal >= 0.75) {
    fullStars.push(<StarFilled />);
    emptyStarsLength--;
  }

  if (emptyStarsLength) {
    for (let i = 0; i < emptyStarsLength; i++) {
      emptyStars.push(
        <StarOutlined
          onMouseEnter={() => props.onHover(i + 1 + fullStars.length)}
        />
      );
    }
  }

  return (
    <div>
      {fullStars}
      {emptyStars}
      {props.value}
    </div>
  );
};
export default Rating;
