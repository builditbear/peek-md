import styled from "styled-components";

const DoctorEntryContainer = styled.div`
  display: flex;
  padding: 0.5vw;
  margin: 1vw;
  background: #fffffa;
  border-radius: 10px;
`;

const FlexItemWrapper = styled.div`
  flex: 1;
`;

const StarContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px;
`;

const RatingContainer = styled.div`
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0.5;
  border: 2px solid black;
  border-radius: 10px 5px 10px 5px;
  background: #90a292;
`;

const AppContainer = styled.div`
  height: 75vh;
  display: flex;
  margin: 5vw 15vw;
`;

const FilterControlContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: auto;
`;

const ResultsContainer = styled.div`
  background-color: #5b6c5d;
  overflow: scroll;
  border-radius: 10px;
  flex: 3;
`;

const SearchBoxContainer = styled.div`
  margin: 3vw 0;
  display: flex;
  width: 100%;
  justify-content: center;
`;

const FilterSelectContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const SelectItem = styled.select`
  width: 80%;
  border-radius: 5px;
  border: 3px solid #5b7b7a;
`;

const TextInput = styled.input`
  width: 80%;
  border-radius: 5px;
  border: 3px solid #5b7b7a;
`;

const AppLogo = styled.img`
  width: 20vw;
  min-width: 200px;
  max-width: 350px;
`;

export {
  DoctorEntryContainer,
  FlexItemWrapper,
  StarContainer,
  RatingContainer,
  AppContainer,
  FilterControlContainer,
  ResultsContainer,
  SearchBoxContainer,
  FilterSelectContainer,
  SelectItem,
  TextInput,
  AppLogo,
};
