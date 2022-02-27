import DoctorEntry from "./DoctorEntry";

function ResultsContainer(props) {
  // Later, will allow the results to be filter according to current state before rendering.
  let results = props.doctorDB;
  if (props.filter !== "None") {
    results = results.filter((result) => result.specialty === props.filter);
  }
  if (props.searchName) {
    results = results.filter((result) =>
      result.name.toLowerCase().includes(props.searchName.toLowerCase())
    );
  }
  const resultsList = results.map((result) => {
    return <DoctorEntry key={result.name} doctor={result}></DoctorEntry>;
  });

  return <div>{resultsList}</div>;
}

export default ResultsContainer;
