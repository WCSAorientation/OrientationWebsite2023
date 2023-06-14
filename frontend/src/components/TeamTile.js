import React from "react";

function TeamTile({ name, position, about, imageName, isLeftAligned }) {
  let displayName = name.split(" ").map((namePart, index) => (
    <span
      key={index}
      className="first-letter:text-4xl inline-block whitespace-break-spaces"
    >
      {index !== 0 && " "}
      {namePart.toUpperCase()}
    </span>
  ));

  let aboutDisplay = (
    <ul className="list-disc text-lg font-medium ml-6 mt-2">
      {about.map((point, pointNumber) => (
        <li key={pointNumber}>{point}</li>
      ))}
    </ul>
  );

  return (
    <div className={isLeftAligned ? "flex justify-start" : "flex justify-end"}>
      <div className="relative overflow-hidden max-w-[65%] mb-[12%]">
        <img src={"./person-background.svg"} alt="cardbg"></img>
        <img src={imageName} className="absolute left-0 bottom-0 max-h-full" alt="profilepic"/>
        <div className="absolute top-0 left-[34%] right-[10%] p-3 pl-100">
          <h2 className="font-[700] text-3xl text-[#000000] -mb-1.5">
            {displayName}
          </h2>
          <span className="text-[#628080] text-lg">{position}</span>
          {aboutDisplay}
        </div>
      </div>
    </div>
  );
}

export default TeamTile;
