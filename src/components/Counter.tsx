import { useState } from 'react';

export default function Counter({ children, count: initialCount }: any) {
  const [count, setCount] = useState<number>(initialCount);
  const add = () => setCount((i: number) => i + 1);
  const subtract = () => setCount((i: number) => i - 1);

  return (
    <>
      <div className="counter">
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
      <div className="counter-message">{children}</div>
    </>
  );
}
