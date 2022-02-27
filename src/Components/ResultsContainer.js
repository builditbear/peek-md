import DoctorEntry from "./DoctorEntry";

function ResultsContainer(props) {
  // Later, will allow the results to be filter according to current state before rendering.
  const results = props.doctorDB;
  const resultsList = results.map((result) => {
    return <DoctorEntry key={result.name} doctor={result}></DoctorEntry>;
  });

  return <div>{resultsList}</div>;
}

export default ResultsContainer;
