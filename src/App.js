import React, { useState } from 'react';
import './App.css'; // Custom CSS or Tailwind imports
import kitty from './assets/kitty.gif'; // Kitty GIF
import rose from './assets/Rose.jpg'; // Rose image

function App() {
  const [roseVisible, setRoseVisible] = useState(false);

  const handleRoseClick = () => {
    // Toggle rose visibility when button is clicked
    setRoseVisible((prevState) => !prevState);
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center relative flex flex-col items-center justify-center p-6 overflow-hidden"
      style={{ backgroundImage: "url('https://example.com/your-image.jpg')" }} // Add custom image URL here
    >
      {/* Milky Way Stars Effect */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 200 }).map((_, index) => (
          <span
            key={index}
            className="absolute text-white text-xl animate-twinkling"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random(),
            }}
          >
            ★
          </span>
        ))}
      </div>

      {/* Heart Rain */}
      {roseVisible && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {Array.from({ length: 30 }).map((_, index) => (
            <span
              key={index}
              className="heart absolute text-red-500 text-3xl animate-fall"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              ❤️
            </span>
          ))}
        </div>
      )}

      {/* Rose Image */}
      {!roseVisible && (
        <>
          <img
            src={rose}
            alt="Blooming Rose"
            className="w-48 h-48 rounded-lg shadow-2xl mb-6 border-4 border-pink-200 transition-all duration-500 transform hover:scale-110"
          />
          <h1 className="text-5xl font-extrabold text-pink-300 animate-bounce mb-6">
            Sweet Kitty
          </h1>
        </>
      )}

      {/* Interactive Button */}
      <button
        onClick={handleRoseClick}
        className="px-8 py-4 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-110 ease-in-out duration-300"
      >
        Click Me
      </button>

      {/* Conditional Kitty Animation */}
      {roseVisible && (
        <div className="mt-8 flex flex-col items-center justify-center text-center">
          {/* Kitty Image */}
          <img
            src={kitty}
            alt="Cute Kitty"
            className="w-72 h-80 rounded-lg shadow-2xl transform transition-transform duration-300 hover:scale-110"
          />
          
          {/* Surprise Message */}
          <p className="text-2xl text-white font-semibold mt-6 px-4 md:px-8 max-w-lg mx-auto leading-relaxed">
            Just a little surprise to make you smile! 💖
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
