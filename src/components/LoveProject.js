// import React, { useState } from "react";
// import kitty from "./assets/kitty.gif"; // Replace with your kitty image
// import rose from "./assets/Rose.jpeg"; // Replace with your rose animation

// const LoveProject = () => {
//   const [roseVisible, setRoseVisible] = useState(false);

//   const handleRoseClick = () => {
//     setRoseVisible(true);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-pink-100 p-6">
//       {/* Kitty Image */}
//       <img
//         src={kitty}
//         alt="Cute Kitty"
//         className="w-40 h-40 rounded-lg shadow-lg mb-4 border-4 border-pink-300"
//       />

//       {/* Name Animation */}
//       <h1 className="text-4xl font-bold text-pink-600 animate-bounce mb-4">
//         Roja
//       </h1>

//       {/* Button for Rose */}
//       <button
//         onClick={handleRoseClick}
//         className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-md hover:bg-pink-600 transition"
//       >
//         Click Me
//       </button>

//       {/* Rose Animation */}
//       {roseVisible && (
//         <img
//           src={rose}
//           alt="Blooming Rose"
//           className="mt-6 w-32 h-32 animate-pulse"
//         />
//       )}

//       {/* Message */}
//       <p className="text-lg text-pink-700 mt-4">
//         Just a little surprise to make you smile! 💖
//       </p>
//     </div>
//   );
// };

// export default LoveProject;
