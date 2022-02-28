import PeekMDApp from "./components/PeekMDApp.js";

function App() {
  const doctorDB = [
    {
      name: "Dr. Eli Von Schnozblonger, MD",
      specialty: "Ophthalmologist",
      location: "Bellingham, WA",
      rating: 4,
    },
    {
      name: "Dr. Steve Evets, MD",
      specialty: "ENT",
      location: "Chicago, IL",
      rating: 2,
    },
    {
      name: "Dr. Kapitan Kranch, ND",
      specialty: "PCP",
      location: "Los Angeles, CA",
      rating: 5,
    },
    {
      name: "Chris P. Bacon, ARNP",
      specialty: "Dermatologist",
      location: "Maple Falls, WA",
      rating: 3,
    },
    {
      name: "Dr. Barry White, MD",
      specialty: "Cardiologist",
      location: "New York, NY",
      rating: 4,
    },
    {
      name: "Dr. Billy-Bob Jo, MD",
      specialty: "PCP",
      location: "Bellingham, WA",
      rating: 4,
    },
    {
      name: "Dr. Acai Bull, MD",
      specialty: "Ophthalmologist",
      location: "Kansas City, KA",
      rating: 1,
    },
    {
      name: "Dr. Smoothie Baans, MD",
      specialty: "Ophthalmologist",
      location: "Seattle, KA",
      rating: 5,
    },
    {
      name: "Steve E. Blunder NP",
      specialty: "PCP",
      location: "Seattle, WA",
      rating: 2,
    },
    {
      name: "Dr. Biggs Tick, MD",
      specialty: "Gastroenterologist",
      location: "Kansas City, KA",
      rating: 5,
    },
    {
      name: "Sheev Palpatine ARNP",
      specialty: "PCP",
      location: "Bellingham, WA",
      rating: 4,
    },
    {
      name: "Dr. Angus Steakbottom, MD",
      specialty: "Podiatrist",
      location: "Bellingham, WA",
      rating: 2,
    },
    {
      name: "Penny N. Cash, NP",
      specialty: "Pediatrician",
      location: "New York, NY",
      rating: 4,
    },
    {
      name: "Dr. Violet Honey, MD",
      specialty: "Gastroenterologist",
      location: "Bellingham, WA",
      rating: 5,
    },
  ];

  return <PeekMDApp doctorDB={doctorDB} />;
}

export default App;
