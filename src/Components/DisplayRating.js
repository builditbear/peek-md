import star from "../media/star.svg";
import { StarContainer, RatingContainer } from "./ComponentStyles";

function DisplayRating(props) {
  const starQty = props.rating;
  // Here we effectively generate the keys for each star to be rendered (its position, in this case) before
  // generating the list of stars itself using map.
  const starIDs = [];
  for (let i = 0; i < starQty; i++) {
    starIDs[i] = i + 1;
  }

  const stars = starIDs.map((id) => {
    return (
      <StarContainer>
        <img
          key={id}
          id={id}
          src={star}
          alt="A single, yellow star"
          // style={{ flex: 0.5 }}
        ></img>
      </StarContainer>
    );
  });

  return <RatingContainer>{stars}</RatingContainer>;
}

export default DisplayRating;
