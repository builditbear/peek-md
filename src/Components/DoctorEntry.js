import DisplayRating from "./DisplayRating";
import { DoctorEntryContainer, FlexItemWrapper } from "./ComponentStyles";

// An object encapsulating a single doctor's name along with specialty, location, and review score must be passed in.
function DoctorEntry(props) {
  const doctor = props.doctor;
  return (
    <DoctorEntryContainer>
      <FlexItemWrapper>
        <h2 onClick={(e) => props.onSelectedDoctorChange(e, doctor)}>
          {doctor.name}
        </h2>
        <p>
          {doctor.specialty} in {doctor.location}
        </p>
      </FlexItemWrapper>
      <DisplayRating rating={doctor.rating} />
    </DoctorEntryContainer>
  );
}

export default DoctorEntry;
