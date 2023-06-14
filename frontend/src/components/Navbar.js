import React from 'react';

export function NavBar() {
  return (
    <>
    <div class='flex mt-3 pb-2 mx-[10%] justify-center text-lg text-[#182E2E] border-b-2'>
      <h1 class='tracking-wide pr-[45%]'>
        WOODSWORTH
      </h1>
      <div class='flex justify-end gap-10'>
        <a href={'/'}><h1 class='hover:cursor-pointer'>home</h1></a>
        <a href={'/tickets'}><h1 class='hover:cursor-pointer'>tickets</h1></a>
        <a href={'/schedule'}><h1 class='hover:cursor-pointer'>schedule</h1></a>
        <a href={'/team'}><h1 class='hover:cursor-pointer'>team</h1></a>
        <a href={'/sponsors'}><h1 class='hover:cursor-pointer'>sponsors</h1></a>
        <a href={'/more'}><h1 class='hover:cursor-pointer'>more</h1></a>
      </div>
    </div>
    </>
  );
}