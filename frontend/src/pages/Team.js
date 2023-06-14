import React from "react";
import TeamTile from "../components/TeamTile";
import { NavBar } from "../components/NavBar";

function Team() {
  return (
    <>
      <body className="bg-[#182E2E] min-h-screen">
        <NavBar isDark={true} />
        <main className="py-[8.5%] pb-[0.05px] mx-[10%]">
          <TeamTile
            name="John Doe"
            position="your orientation position"
            about={[
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            ]}
            imageName="person-portrait.png"
            isLeftAligned={true}
          />
          <TeamTile
            name="Puss E. Kat"
            position="your orientation position"
            about={[
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem!",
            ]}
            imageName="cat-portrait.svg"
          />
          <TeamTile
            name="John Doe"
            position="your orientation position"
            about={[
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            ]}
            imageName="person-portrait.png"
            isLeftAligned={true}
          />
          <TeamTile
            name="John Doe"
            position="your orientation position"
            about={[
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
              "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
            ]}
            imageName="person-portrait.png"
          />
        </main>
      </body>
    </>
  );
}

export default Team;
