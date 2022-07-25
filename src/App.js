import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);

  const inc = () => setCount(count + 1);
  const dec = () => setCount(count - 1);

  return (
    <div className="container">
      <img
        src="https://4.bp.blogspot.com/-9CgyD2E4gg4/WYSsd7OEPjI/AAAAAAAALd4/6H-g82SP1Ck3yGzcBTsQMVayhgjvvJXoQCLcBGAs/s400/55d1e63b1700006e00567a0e.jpeg"
        alt="Cat"
      />
      <p>{count}</p>
      <button onClick={inc}>Inc</button>
      <button onClick={dec}>Dec</button>
    </div>
  );
}

export default App;
