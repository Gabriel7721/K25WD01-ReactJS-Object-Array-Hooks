import { useState } from "react";

let nextId = 1;

const CreateList = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);

  return (
    <>
      <h1>Artist List:</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button
        onClick={() => {
          // setArtists([...artists,{id: nextId++, name: name}])
          setArtists([{ id: nextId++, name: name }, ...artists]);
          // artists.push({ id: nextId++, name: name });
        }}>
        ADD
      </button>
      <ul>
        {artists.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
    </>
  );
};

export default CreateList;
