import React from "react";

const App = () => {
  const movies = [
    { name: "Kizumonogatari Part 1: Tekketsu", year: 2016 },
    { name: "Kizumonogatari Part 2: Nekketsu", year: 2016 },
    { name: "Kizumonogatari Part 3: Reiketsu", year: 2017 },
  ];
  return (
    <ul>
      {movies
        .filter(({ year }) => year >= 2017)
        .map(({ name, year }) => (
          <li key={name}>
            {name}, {year}
          </li>
        ))}
    </ul>
  );
};

export default App;
