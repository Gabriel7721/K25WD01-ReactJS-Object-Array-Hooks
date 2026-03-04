import { useState } from "react";

let nextId = 1;

const List = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <input />
      <button>ADD</button>
      <ul>
        {artists.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </>
  );
};

export default List;
