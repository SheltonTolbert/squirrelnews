import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={require('./logo.svg')} alt="Display" />
      <div className="px-6 py-4 font-bold text-purple-500 text-xl mb-2">
        <div className="">
          Lola Lolarian
        </div>
        <p className="text-gray-700 text-base">
          When i’m not coding i switch to netflix with biscuits and cold tea as my companion. <span></span>😜
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 riund-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Developer</span>
        <span className="inline-block bg-gray-200 riund-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Writer</span>
        <span className="inline-block bg-gray-200 riund-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Speaker</span>
      </div>
    </div>
  );
}

export default App;
