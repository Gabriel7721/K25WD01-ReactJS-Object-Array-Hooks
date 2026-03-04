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

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list art to see:</h2>
      <ItemList artworks={myList} />
      <h2>Your list art to see:</h2>
      <ItemList artworks={yourList} />
    </>
  );
};

const ItemList = ({ artworks }) => {
  return (
    <ul>
      {artworks.map((a) => (
        <li>
          <label>
            <input type="checkbox" checked={a.seen} />
            {a.title}
          </label>
        </li>
      ))}
    </ul>
  );
};

export default BucketList;
