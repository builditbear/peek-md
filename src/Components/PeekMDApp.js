import React, { useState } from "react";

import FilterControls from "./FilterControls";
import Results from "./Results";
import { AppContainer } from "./ComponentStyles";

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
    <AppContainer>
      <FilterControls
        onChangeFilter={onChangeFilter}
        onChangeSearchName={onChangeSearchName}
      />
      <Results
        doctorDB={props.doctorDB}
        filter={currentFilter}
        searchName={searchName}
      />
    </AppContainer>
  );
}

export default PeekMDApp;
