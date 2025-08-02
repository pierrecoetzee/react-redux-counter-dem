import CounterDisplay from '@/components/CounterDisplay';
import CounterControls from '@/components/CounterControls';
import Drawer from '@/components/Drawer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* Drawer with Redux information */}
      <Drawer>
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-blue-800 mb-3">When to use Redux:</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Complex State:</strong> When managing large amounts of application state becomes difficult</p>
            <p>• <strong>Shared State:</strong> When multiple components need access to the same state data</p>
            <p>• <strong>Predictable Updates:</strong> When you need a single source of truth for your app&apos;s state</p>
            <p>• <strong>State History:</strong> When you need to track how state changes over time</p>
            <p>• <strong>Performance:</strong> When state updates need to be optimized for larger applications</p>
            <p>• <strong>Developer Tools:</strong> When you need powerful debugging capabilities</p>
          </div>
        </div>

        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800 mb-3">Redux Core Concepts:</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Store:</strong> Single source of truth for your app&apos;s state</p>
            <p>• <strong>Actions:</strong> Plain objects describing what happened</p>
            <p>• <strong>Reducers:</strong> Pure functions that specify how state changes</p>
            <p>• <strong>Dispatch:</strong> Method to send actions to the store</p>
            <p>• <strong>Selectors:</strong> Functions to extract data from the store</p>
          </div>
        </div>

        <div className="bg-purple-50 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-purple-800 mb-3">This Demo Shows:</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Two components sharing the same state</p>
            <p>• Actions dispatched from one component</p>
            <p>• State updates reflected in both components</p>
            <p>• Action history tracking</p>
            <p>• TypeScript integration</p>
          </div>
        </div>
      </Drawer>

      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Redux State Management Demo
          </h1>
          <p className="text-lg text-gray-600">
            Two components sharing state through Redux
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Click the menu button in the top-left to learn more about Redux
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <CounterControls />
          <CounterDisplay />
        </div>
      </div>
    </div>
  );
}