import { useState } from "react";

let nextId = 3;
let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const InsertList = () => {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Artist List:</h1>
      <input />
      <button>Insert</button>
      <ul>
        {artists.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InsertList;
