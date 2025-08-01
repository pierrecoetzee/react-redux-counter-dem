'use client';

import { useAppSelector } from '@/redux/hooks/app';

export default function CounterDisplay() {
  const { value, history } = useAppSelector((state) => state.counter);

  return (
    <div className="bg-blue-50 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Counter Display Component</h2>

      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-700">Current Value: </span>
        <span className="text-3xl font-bold text-blue-600">{value}</span>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">Action History:</h3>
        <div className="max-h-40 overflow-y-auto bg-white p-3 rounded border">
          {history.map((entry, index) => (
            <div
              key={index}
              className="text-sm text-gray-600 py-1 border-b border-gray-100 last:border-b-0"
            >
              {index + 1}. {entry}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}