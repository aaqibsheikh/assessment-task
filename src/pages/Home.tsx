import React from 'react';

const Home: React.FC = () => {
  // Array of funny lines
  const funnyLines = [
    "Welcome to the Developer's Challenge!",
    "Get ready to code like a wizard 🧙‍♂️",
    "Time to show off your coding skills!",
    "Let's turn coffee ☕ into code 💻",
    "Prepare for the ultimate coding adventure!",
  ];

  // Randomly select a funny line
  const randomFunnyLine = funnyLines[Math.floor(Math.random() * funnyLines.length)];

  return (
    <div className="bg-blue-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-green-700 text-3xl">Assessment Task</h1>
      <p className="text-xl mt-3 text-center text-gray-800">{randomFunnyLine}</p>
      <div className="mt-8 border-2 border-gray-300 rounded-md p-6 max-w-lg bg-white shadow-md">
        <h2 className="text-2xl text-gray-800 mb-4">Task Overview:</h2>
        <p className="text-gray-800 mt-2">
          This assessment is designed to evaluate your development skills. You will be given a set of coding challenges. Follow these steps to complete the assessment:
        </p>
        <ol className="list-decimal pl-6 mt-4">
          <li className="mb-2">Review the challenge description.</li>
          <li className="mb-2">Write code to solve the challenge.</li>
          <li className="mb-2">Test your code to ensure it works correctly.</li>
          <li className="mb-2">Submit your solutions when finished.</li>
        </ol>
        <p className="text-gray-600 mt-4">
          Good luck, and happy coding!
        </p>
        <button className="bg-green-500 hover:bg-green-600 text-white mt-6 py-2 px-4 rounded-full">
          Start Coding!
        </button>
      </div>
    </div>
  );
};

export default Home;
