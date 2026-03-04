import { useState } from "react";

let nextId = 3;
let initialArtists = [
  { id: 0, name: "Marta Colvin Andrade" },
  { id: 1, name: "Lamidi Olonade Fakeye" },
  { id: 2, name: "Louise Nevelson" },
];

const InsertList = () => {
  const [artists, setArtists] = useState(initialArtists);
  const [name, setName] = useState("");
  const [insertIndex, setInsertIndex] = useState(1);

  function handleClick() {
    const nextArtists = [
      ...artists.slice(0, insertIndex),
      { id: nextId++, name: name },
      ...artists.slice(insertIndex),
    ];
    setArtists(nextArtists);
    setName("");
  }

  return (
    <>
      <h1>Artist List:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input
        value={insertIndex}
        onChange={(e) => setInsertIndex(e.target.value)}
      />
      <button onClick={handleClick}>Insert</button>
      <ul>
        {artists.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </>
  );
};

export default InsertList;
