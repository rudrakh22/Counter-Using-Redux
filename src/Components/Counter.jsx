import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/slices/CounterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex  items-center h-full w-full justify-center">
      <div className="flex flex-col gap-y-5 items-center">
        <div className="text-2xl font-bold text-cyan-200">
          Increment And Decrement
        </div>
        <div className="flex justify-between w-full gap-x-4 items-baseline">
          <button
            className="bg-cyan-400 px-3 py-3 rounded-xl text-white font-bold text-lg"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <div className="bg-white px-7 py-3">{count}</div>
          <button
            className="bg-cyan-400 px-3 py-3 rounded-xl text-white font-bold text-lg"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
