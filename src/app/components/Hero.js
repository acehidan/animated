import React from "react";

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">June Doe</h1>
      <p
        className="text-xl font-semibold text-blue-500 "
        style={{
          letterSpacing: "10px",
        }}
      >
        Frontend Developer
      </p>
    </div>
  );
}

export default Hero;
