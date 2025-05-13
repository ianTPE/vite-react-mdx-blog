import React, { useState } from 'react';

const Demo: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="demo-component">
      <h3>Interactive Counter Component</h3>
      <p>This component is specific to the first blog post.</p>
      <div className="counter">
        <button onClick={() => setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <p className="counter-text">
        You've clicked {count} {count === 1 ? 'time' : 'times'}
      </p>
    </div>
  );
};

export default Demo;