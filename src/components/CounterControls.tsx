'use client';

import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/redux/hooks/app';
import { increment, decrement, incrementByAmount, reset, clearHistory } from '@/redux/reducers/counterSlice';

export default function CounterControls() {
  const dispatch = useAppDispatch();
  const currentValue = useAppSelector((state) => state.counter.value);
  const [customAmount, setCustomAmount] = useState<string>('5');

  const handleIncrementByAmount = () => {
    const amount = parseInt(customAmount) || 0;
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="bg-green-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-green-800 mb-4">Counter Controls Component</h2>

      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-700">Current Value: </span>
        <span className="text-3xl font-bold text-green-600">{currentValue}</span>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
        >
          +1 Increment
        </button>

        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        >
          -1 Decrement
        </button>
      </div>

      <div className="mb-6 p-4 bg-white rounded border">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Custom Amount:
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-orange-600"
            placeholder="Enter amount"
          />
          <button
            onClick={handleIncrementByAmount}
            className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700 transition-colors"
          >
            Add
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => dispatch(reset())}
          className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
        >
          Reset Counter
        </button>

        <button
          onClick={() => dispatch(clearHistory())}
          className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors"
        >
          Clear History
        </button>
      </div>
    </div>
  );
}