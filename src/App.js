import PeekMDApp from "./components/PeekMDApp";
import "./App.css";

function App() {
  const doctorDB = [
    {
      Name: "Dr. Eli Von Schnozblonger, MD",
      Specialty: "Ophthalmologist",
      Location: "Bellingham, WA",
      Rating: 4,
    },
    {
      Name: "Dr. Steve Evets, MD",
      Specialty: "ENT",
      Location: "Chicago, IL",
      Rating: 2,
    },
    {
      Name: "Dr. Kapitan Kranch, ND",
      Specialty: "PCP",
      Location: "Los Angeles, CA",
      Rating: 5,
    },
    {
      Name: "Chris P. Bacon, ARNP",
      Specialty: "Dermatologist",
      Location: "Maple Falls, WA",
      Rating: 3,
    },
    {
      Name: "Dr. Barry White, MD",
      Specialty: "Cardiologist",
      Location: "New York, NY",
      Rating: 4,
    },
    {
      Name: "Dr. Billy-Bob Jo, MD",
      Specialty: "PCP",
      Location: "Bellingham, WA",
      Rating: 4,
    },
    {
      Name: "Dr. Acai Bull, MD",
      Specialty: "Ophthalmologist",
      Location: "Kansas City, KA",
      Rating: 1,
    },
  ];

  return <PeekMDApp doctorDB={doctorDB} />;
}

export default App;
