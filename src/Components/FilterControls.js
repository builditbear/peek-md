import React from "react";
import logo from "../media/PeekMDLogo.png";

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
        src={logo}
        alt="The Peek.MD logo: A red cross on a white background with a caption below reading 'Peek.MD - Provider Lookups"
      ></img>
      <input
        type="text"
        name="search-by-name"
        onChange={props.onChangeSearchName}
      ></input>
      <select
        name="specialty"
        id="select-specialty"
        onChange={props.onChangeFilter}
      >
        <option value="None" key="None">
          Filter by Specialty
        </option>
        {selectItems}
      </select>
    </div>
  );
}

export default FilterControls;
