import React, { useState } from "react";

import FilterControls from "./FilterControls";
import Results from "./Results";
import { AppContainer } from "./ComponentStyles";

function PeekMDApp(props) {
  const [currentFilter, setCurrentFilter] = useState("");
  const [searchName, setSearchName] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null);

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

  const onSelectedDoctorChange = (e, doctor) => {
    setSelectedDoctor(doctor);
  };

  return (
    <AppContainer>
      <FilterControls
        onChangeFilter={onChangeFilter}
        onChangeSearchName={onChangeSearchName}
        onSelectedDoctorChange={onSelectedDoctorChange}
      />
      <Results
        doctorDB={props.doctorDB}
        filter={currentFilter}
        searchName={searchName}
        selectedDoctor={selectedDoctor}
        onSelectedDoctorChange={onSelectedDoctorChange}
      />
    </AppContainer>
  );
}

export default PeekMDApp;
