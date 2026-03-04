import { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Server is rendering");

  useEffect(() => {
    console.log("Server is mounted");
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default Counter;
