import React from "react";
import TeamTile from "../components/TeamTile";
import { NavBar } from "../components/NavBar";
import teamInfo from "../data/team-info.json";

function Team() {
  return (
    <>
      <body className="bg-[#182E2E] min-h-screen">
        <NavBar isDark={true} />
        <main className="py-[8.5%] pb-[0.05px] mx-[10%]">
          {teamInfo.map((memberInfo, index) => (
            <TeamTile
            key={index}
              name={memberInfo.name}
              position={memberInfo.position}
              about={memberInfo.about}
              imageName={memberInfo.imageName}
              isLeftAligned={index % 2 === 0}
            />
          ))}
        </main>
      </body>
    </>
  );
}

export default Team;
