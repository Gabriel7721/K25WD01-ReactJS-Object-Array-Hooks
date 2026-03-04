import { useState } from "react";

let initialCounters = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  function handleIncreaseClick(i) {
    setCounters(
      counters.map((count, index) => {
        if (index === i) {
          return count + 1;
        } else {
          return count;
        }
      }),
    );
  }

  return (
    <>
      <h1>Increase count to one</h1>
      <ul>
        {counters.map((c, i) => (
          <li>
            {c} <button onClick={() => handleIncreaseClick(i)}>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CounterList;
