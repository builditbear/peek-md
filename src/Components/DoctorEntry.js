import DisplayRating from "./DisplayRating";

// An object encapsulating a single doctor's name along with specialty, location, and review score must be passed in.
function DoctorEntry(props) {
  const doctor = props.doctor;
  return (
    <div>
      <h2>{doctor.name}</h2>
      <p>
        {doctor.specialty} in {doctor.location}
      </p>
      <DisplayRating rating={doctor.rating} />
    </div>
  );
}

export default DoctorEntry;
