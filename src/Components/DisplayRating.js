import star from "../media/star.svg";

function DisplayRating(props) {
  const starQty = props.rating;
  const starIDs = [];
  for (let i = 0; i < starQty; i++) {
    starIDs[i] = i + 1;
  }
  const stars = starIDs.map((id) => {
    return <img key={id} id={id} src={star} alt="A single, yellow star"></img>;
  });
  return <div>{stars}</div>;
}

export default DisplayRating;
