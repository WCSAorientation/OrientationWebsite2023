import React from "react";

function TeamTile({ name, position, about, imageName }) {
  let displayName = name.split(" ").map((namePart, index) => (
    <span className="first-letter:text-3xl inline-block whitespace-break-spaces">
      {index !== 0 && " "}
      {namePart.toUpperCase()}
    </span>
  ));

  return (
    <>
      <div className="relative rounded-l-[12%] overflow-hidden max-w-[50%]">
        <img src={"./person-background.svg"}></img>
        <img
          src={imageName}
          className="absolute left-0 bottom-0 max-h-full"
        />
        <div className="absolute top-0 left-[34%] right-[10%] p-3 pl-100">
          <h2 className="font-[700] text-2xl text-[#000000] -mb-1.5">
            {displayName}
          </h2>
          <span className="text-[#628080]">{position}</span>
          <ul className="list-disc font-medium ml-6 mt-2">
            {about.map((point) => (
              <li>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default TeamTile;

// import React from "react";
// import PersonBackground from "../assets/person-background.svg";

// function TeamTile() {
//   let name = "John Doe";
//   let displayName = name.split(" ").map((namePart, index) => (
//     <span className="first-letter:text-3xl inline-block whitespace-break-spaces">
//       {index !== 0 && " "}
//       {namePart.toUpperCase()}
//     </span>
//   ));

//   return (
//     <>
//       <div className="relative rounded-l-[12%] overflow-hidden max-w-[50%]">
//         <img src={PersonBackground}></img>
//         <img
//           src="./cat-portrait.svg"
//           className="absolute left-0 bottom-0 max-h-full"
//         />
//         <div className="absolute top-0 left-[34%] right-[10%] p-3 pl-100">
//           <h2 className="font-[700] text-2xl text-[#000000] -mb-1.5">
//             {displayName}
//           </h2>
//           <span className="text-[#628080]">your orientation position</span>
//           <ul className="list-disc font-medium ml-6 mt-2">
//             <li>
//               Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
//             </li>
//             <li>
//               Neque porro quisquam est qui dolorem ipsum quia dolor sit amet
//             </li>
//             <li>Neque porro quisquam est qui dolorem ipsum quia solom</li>
//             <li>Neque porro quisquam est qui dolorem!</li>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// }

// export default TeamTile;
