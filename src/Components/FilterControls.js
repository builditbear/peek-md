import React from "react";
import logo from "../media/PeekMDLogo.png";
// Components representing styled containers and other elements, such as input fields.
import {
  FilterControlContainer,
  FilterSelectContainer,
  SearchBoxContainer,
  SelectItem,
  TextInput,
  AppLogo,
} from "./ComponentStyles";

function FilterControls(props) {
  // Available options for selection in the dropdown select menu.
  const filterOptions = [
    "Cardiologist",
    "Dermatologist",
    "ENT",
    "Gastroenterologist",
    "Ophthalmologist",
    "PCP",
    "Pediatrician",
    "Podiatrist",
  ];

  // Generate a list of option elements for rendering based on the above list.
  const selectItems = filterOptions.map((filterOption) => {
    return (
      <option value={filterOption} key={filterOption}>
        {filterOption}
      </option>
    );
  });

  return (
    <FilterControlContainer>
      <AppLogo
        className="peek-md-logo"
        src={logo}
        alt="The Peek.MD logo: A red cross on a white background with a captio--n below reading 'Peek.MD - Provider Lookups"
      ></AppLogo>
      <SearchBoxContainer>
        <TextInput
          type="text"
          name="search-by-name"
          placeholder="Search by Name"
          onChange={props.onChangeSearchName}
        ></TextInput>
      </SearchBoxContainer>
      <FilterSelectContainer>
        <SelectItem
          name="specialty"
          id="select-specialty"
          onChange={props.onChangeFilter}
        >
          <option value="None" key="None">
            Filter by Specialty
          </option>
          {selectItems}
        </SelectItem>
      </FilterSelectContainer>
    </FilterControlContainer>
  );
}

export default FilterControls;
