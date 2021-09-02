import React from "react";
import "./App.css";

const App: React.FC = () => (
  <div className="bg-white">
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-screen-xl">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide text-red-600 uppercase">
          Creat your next Project with the starter template.
        </h2>
        <p className="my-3 text-4xl sm:text-5xl lg:text-6xl font-bold sm:tracking-tight text-gray-900">
          reactjs-typescript-vite-tailwindcss-eslint-prettier-boilerplate
        </p>
      </div>
    </div>
  </div>
);

export default App;