import React, { useState } from "react";
import FilterControls from "./FilterControls";
import DoctorEntry from "./DoctorEntry";
import ResultsContainer from "./ResultsContainer";

function PeekMDApp(props) {
  const [currentFilter, setCurrentFilter] = useState("None");
  const [searchName, setSearchName] = useState("");

  //   Statements for testing state values during test runs.
  //   console.log(`Current search name is ${searchName ? searchName : "nothing"}.`);
  //   console.log(`Current search filter is ${currentFilter}.`);

  const onChangeFilter = (e) => {
    const filter = e.target.value;
    setCurrentFilter(filter);
  };

  const onChangeSearchName = (e) => {
    const searchName = e.target.value;
    setSearchName(searchName);
  };

  return (
    <div>
      <FilterControls
        onChangeFilter={onChangeFilter}
        onChangeSearchName={onChangeSearchName}
      />
      {/* <ResultsContainer /> */}
      <ResultsContainer doctorDB={props.doctorDB} />
    </div>
  );
}

export default PeekMDApp;
