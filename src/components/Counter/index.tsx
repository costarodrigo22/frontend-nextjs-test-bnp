import { useState, useEffect } from "react";

const eventMount = new Event("onCounterMount");
const eventUnmount = new Event("onCounterUnmount");
const eventUpdate = new Event("onCounterUpdate");

type CounterProps = {
  initialCount: number;
};

export const Counter: React.FC<CounterProps> = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    window.dispatchEvent(eventMount);

    return () => {
      window.dispatchEvent(eventUnmount);
    };
  }, []);

  useEffect(() => {
    window.dispatchEvent(eventUpdate);
  });

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
