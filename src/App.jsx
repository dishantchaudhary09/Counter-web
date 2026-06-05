import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  return (
    <>
      {!hidden && (
        <>
          <p>counter: {count}</p>
          <button className="increment" onClick={() => setCount(c => c + 1)}>Click me</button>
          <button className="reset" onClick={() => setCount(0)}>Reset</button>
        </>
      )}

      <button className="toggle" onClick={() => setHidden(h => !h)}>{hidden ? 'Show' : 'Hide'}</button>
    </>
  );
}

export default App;
