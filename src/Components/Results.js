import DoctorEntry from "./DoctorEntry";
import { ResultsContainer, Header } from "./ComponentStyles";
// import { useState } from "react";

function Results(props) {
  /** Note that I have chosen to list all results in order of rating - I reason
   *  that it is best that patients get exposure to the best providers available
   *  that meet their search requirements.
   *
   *  For the purposes of showing "similar" doctors to the doctor selected by
   *  the user, I have defined similar as meaning any doctor with the same specialty.
   *  Future releases could consider other similarities such as proximity, accepted
   *  insurance, etc.
   */
  let results = props.doctorDB;
  const selectedDoctor = props.selectedDoctor;
  // const [selectedDoctor, setSelectedDoctor] = useState(null);

  if (selectedDoctor) {
    results = results.filter((result) => result.name !== selectedDoctor.name);
    results = results.filter(
      (result) => result.specialty === selectedDoctor.specialty
    );
  } else if (props.filter) {
    results = results.filter((result) => result.specialty === props.filter);
  }
  if (props.searchName) {
    results = results.filter((result) =>
      result.name.toLowerCase().includes(props.searchName.toLowerCase())
    );
  }
  // Results should be sorted by rating in descending order by default (so the highest rated doctors are shown first).
  results = results.sort((a, b) => {
    return b.rating - a.rating;
  });

  // function handleClickOnDoctor(e, doctor) {
  //   console.log(`You clicked ${doctor.name}`);
  //   console.log(`This doctor is a(n) ${doctor.specialty}`);
  //   setSelectedDoctor(doctor);
  // }

  const resultsList = results.map((result) => {
    return (
      <DoctorEntry
        key={result.name}
        onSelectedDoctorChange={props.onSelectedDoctorChange}
        name={result.name}
        doctor={result}
      ></DoctorEntry>
    );
  });

  if (selectedDoctor) {
    return (
      <ResultsContainer>
        <DoctorEntry
          key={selectedDoctor.name}
          onSelectedDoctorChange={props.onSelectedDoctorChange}
          name={selectedDoctor.name}
          doctor={selectedDoctor}
        ></DoctorEntry>
        <Header>Similar Doctors:</Header>
        {resultsList}
      </ResultsContainer>
    );
  } else {
    return <ResultsContainer>{resultsList}</ResultsContainer>;
  }
}

export default Results;
