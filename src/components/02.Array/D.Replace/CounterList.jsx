import { useState } from "react";

let initialCounters = [0, 0, 0];

const CounterList = () => {
  const [counters, setCounters] = useState(initialCounters);

  return (
    <>
      <h1>Increase count to one</h1>
      <ul>
        {counters.map((c, i) => (
          <li>
            {c} <button>+1</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CounterList;
