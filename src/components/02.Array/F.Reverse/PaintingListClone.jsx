import { useState } from "react";
import styles from "./PaintingList.module.css";

let initialPaintingList = [
  {
    id: 0,
    title: "The Battle of Alexander at Issus",
    artist: "Albrecht Altdorfer",
    artLink: "./painting-list/painting1.jpg",
  },
  {
    id: 1,
    title: "Fire",
    artist: "Giuseppe Arcimboldo",
    artLink: "./painting-list/painting2.jpg",
  },
  {
    id: 2,
    title: "Samson and Delilah",
    artist: "Anthony van Dyck",
    artLink: "./painting-list/painting3.jpg",
  },
  {
    id: 3,
    title: "Mona Lisa",
    artist: "Leonardo da Vinci",
    artLink: "./painting-list/painting4.jpg",
  },
];

const PaintingListClone = () => {
  const [paintingList, setPaintingList] = useState(initialPaintingList);

  function handleClick() {
    const newList = [...paintingList];
    newList.reverse();
    setPaintingList(newList);
  }

  return (
    <>
      <h1>Great Paintings</h1>
      <button onClick={handleClick}>Reverse</button>
      <ol>
        {paintingList.map((pl) => (
          <li key={pl.id}>
            {pl.title}
            <figure>
              <img src={pl.artLink} alt={pl.title} />
              <figcaption>{pl.artist}</figcaption>
            </figure>
          </li>
        ))}
      </ol>
    </>
  );
};

export default PaintingListClone;
