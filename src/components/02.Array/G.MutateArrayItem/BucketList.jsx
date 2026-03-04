import { useState } from "react";

const initialList = [
  { id: 0, title: "The Battle of Alexander at Issus", seen: false },
  { id: 1, title: "Fire", seen: false },
  { id: 2, title: "Samson and Delilah", seen: true },
  { id: 3, title: "Mona Lisa", seen: true },
];

const BucketList = () => {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(initialList);

  function handleToggleMyList(artworkId, nextSeen) {
    setMyList(
      myList.map((a) => {
        if (a.id === artworkId) {
          return { ...a, seen: nextSeen };
        } else {
          return a;
        }
      }),
    );
  }

  function handleToggleYourList(artworkId, nextSeen) {
    setYourList(
      myList.map((a) => {
        if (a.id === artworkId) {
          return { ...a, seen: nextSeen };
        } else {
          return a;
        }
      }),
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>

      <h2>My list art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />

      <h2>Your list art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
};

const ItemList = ({ artworks, onToggle }) => {
  return (
    <ul>
      {artworks.map((a) => (
        <li>
          <label>
            <input
              type="checkbox"
              checked={a.seen}
              onChange={(e) => {
                onToggle(a.id, e.target.checked);
              }}
            />
            {a.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default BucketList;
