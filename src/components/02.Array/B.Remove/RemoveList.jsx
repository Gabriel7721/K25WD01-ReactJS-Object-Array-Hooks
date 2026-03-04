import { useState } from "react";

let initialArtists = [
  { id: 1, name: "Marta Colvin Andrade" },
  { id: 2, name: "Lamidi Olonade Fakeye" },
  { id: 3, name: "Louise Nevelson" },
];

const RemoveList = () => {
  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Artist List:</h1>

      <ul>
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default RemoveList;
