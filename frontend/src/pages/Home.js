import React from 'react';
import TreeAnimation from '../components/TreeAnimation';
import { NavBar } from '../components/NavBar';

export function Home() {
  
  return (
      <>
      <NavBar isDark={false} />
      <TreeAnimation className='z-0'/>
      <div className='text-center pt-[5%] px-[20%] text-[#182e2e]'>
        <h1 className='font-bold text-7xl'>Woodsworth College Orientation 2023</h1>
        <body className='font-bold'>September 4th to September 9th</body>
      </div>
      <a href='/tickets'>
      <div className='text-center mt-[5%] py-4 mx-[43%] relative bg-[#182e2e] rounded-[30px] tracking-[.25em] text-white font-bold text-lg hover:cursor-pointer'>
        <h1>BUY TICKETS</h1>
      </div>
      </a>
      <div className='absolute mt-[23%] z-10 bg-[#182e2e] w-[100%] h-[100%]'>
        <div className='grid grid-cols-5 px-[15%] mt-[10%]'>
          <div className='col-span-2'>
            <h1 className='text-8xl font-extrabold tracking-wide text-white'>Discover The <span className='text-[#f0d8a6]'>Wolf</span> In You.</h1>
            <h2 className='mt-4 text-white mb-10'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem magna, volutpat eget dapibus vel, convallis ut felis.
            </h2>
            <a href='/more'>
              <div className='flex justify-start'>
                <div className='text-center mt-[5%] py-4 px-4 bg-[#f0d8a6] rounded-[30px] tracking-[.25em] text-[#182e2e] font-bold text-lg hover:cursor-pointer'>
                  <h1>LEARN MORE</h1>
                </div>
              </div>
            </a>
          </div>
          <div className='col-span-3'>
            <img src='./wolf.png' alt='wolf'/>
          </div>
        </div>
      </div>
      
      </>
  );
}
