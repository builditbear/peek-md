import React, { useState } from "react";
import FilterControls from "./FilterControls";

function PeekMDApp(props) {
  const [currentFilter, setCurrentFilter] = useState("None");
  const [searchName, setSearchName] = useState("");

  const onChangeFilter = (e) => {
    const filter = e.target.value;
    setCurrentFilter(filter);
  };

  return (
    <div>
      <FilterControls onChange={onChangeFilter} />
      {/* <ResultsContainer /> */}
    </div>
  );
}

export default PeekMDApp;
