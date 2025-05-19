import React from "react";
import Image from "next/image";
function loading() {
  return (
    <div>
      <div className="flex justify-center items-center h-screen bg-[#F2F3F7]">
        <Image
          src="/logo.svg"
          alt="Loading"
          width={100}
          height={100}
          //   className="animate-spin"
        />
      </div>
    </div>
  );
}

export default loading;
