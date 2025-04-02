import React from "react";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4">Welcome to AI Health App</h1>
      <p className="text-lg mb-6 text-gray-300 text-center max-w-lg">
        Your personalized AI-driven health assistant. Get real-time food assessment, 
        ingredient analysis, and health recommendations instantly.
      </p>
      <div className="flex gap-4">
        <button className="bg-blue-500 px-6 py-2 rounded-lg hover:bg-blue-600 transition">
          Explore Features
        </button>
        <button className="bg-green-500 px-6 py-2 rounded-lg hover:bg-green-600 transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
