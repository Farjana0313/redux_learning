import { useState } from "react";
import Counter from "./compnents/Counter";
import Stats from "./compnents/Stats";

const initialState = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
]

function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  }

  const increment = (id) => {
    const updatedCounter = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count + 1
        }
      }
      return { ...count };
    });
    
    setState(updatedCounter);
  }
  const deccrement = (id) => {
    const updatedCounter = state.map((count) => {
      if (count.id === id) {
        return {
          ...count,
          count: count.count - 1
        }
      }
      return { ...count };
    });
    setState(updatedCounter);
  }
  return (
    <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
      {/* <!-- header --> */}
      <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
        Simple Counter Application
      </h1>

      {/* <!-- counters --> */}
      <div className="max-w-md mx-auto mt-10 space-y-5">
        {state.map((count) => (
          <Counter
            key={count.id}
            count={count.count}
            id={count.id} increment={increment} deccrement={deccrement} />
        ))}

        <Stats count={totalCount()} />
      </div>
    </div>
  )
}

export default App
