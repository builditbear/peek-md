import React, { useState } from "react";

function FilterControls(props) {
  const filterOptions = [
    "Ophthalmologist",
    "ENT",
    "PCP",
    "Dermatologist",
    "Cardiologist",
  ];

  const selectItems = filterOptions.map((filterOption) => {
    return (
      <option value={filterOption} key={filterOption}>
        {filterOption}
      </option>
    );
  });

  return (
    <div>
      <img
        className="peek-md-logo"
        src="./Media/PeekMDLogo.png"
        alt="The Peek.MD logo: A red cross on a white background with a caption below reading 'Peek.MD - Provider Lookups"
      ></img>
      <input type="text" name="search-by-name"></input>
      <select name="specialty" id="select-specialty" onChange={props.onChange}>
        <option value="None" key="None">
          Filter by Specialty
        </option>
        {selectItems}
      </select>
    </div>
  );
}

export default FilterControls;
