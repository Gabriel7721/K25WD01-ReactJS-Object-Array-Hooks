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

const PaintingListCloneAndOrigin = () => {
  const [paintingList, setPaintingList] = useState(initialPaintingList);
  const [paintingList2, setPaintingList2] = useState(initialPaintingList);

  function handleClick1() {
    const nextPaintingList = [...paintingList];
    nextPaintingList.reverse();
    setPaintingList(nextPaintingList);
  }
  function handleClick2() {
    initialPaintingList.reverse();
    setPaintingList2(initialPaintingList)
  }

  return (
    <div className={styles.frame}>
      <div>
        <h1>Great Paintings 1</h1>
        <button onClick={handleClick1}>Reverse</button>
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
      </div>
      <div>
        <h1>Great Paintings 2</h1>
        <button onClick={handleClick2}>Reverse</button>
        <ol>
          {paintingList2.map((pl) => (
            <li key={pl.id}>
              {pl.title}
              <figure>
                <img src={pl.artLink} alt={pl.title} />
                <figcaption>{pl.artist}</figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default PaintingListCloneAndOrigin;
