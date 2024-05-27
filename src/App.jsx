import { Fragment, useState } from "react";
import "./Count.css";

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => setCount(count + 1);

  const addCount2 = () => setCount(count - 1);

  const addCount3 = () => setCount(0);

  return (
    <div>
      Count: {count}
      <Fragment>
        <button className="btn" onClick={addCount}>
          +
        </button>
        <button className="btn" onClick={addCount2}>
          -
        </button>
        <button className="btn" onClick={addCount3}>
          reset
        </button>
      </Fragment>
    </div>
  );
}

export default App;
