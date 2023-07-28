import React from 'react';
import TreeAnimation from '../components/TreeAnimation';
import { NavBar } from '../components/NavBar';

export function Home() {
  
  return (
      <div className='bg-[#182e2e] min-h-screen'>
        <TreeAnimation className='z-0'/>
        <div className='bg-white h-screen'>
        <NavBar isDark={false} />
          <div className='text-center pt-[5%]  text-[#182e2e] '>
            <div className='text-4xl px-2'><h1 className='font-bold md:px-[15%] md:text-8xl '>Woodsworth College Orientation 2023</h1></div>
            <body className='font-bold py-4 md:py-10 md:text-2xl'>September 4th to September 9th</body>
          </div>
          <a href='/tickets'>
          <div className='flex justify-center'>
          <div className='text-center mt-[20%] md:mt-[5%] py-2 px-5 relative bg-[#182e2e] rounded-[30px] tracking-[.25em] text-white font-bold text-lg hover:cursor-pointer'>
            <h1>BUY TICKETS</h1>
          </div>
          </div>
          </a>
        </div>
        <div className='absolute z-10 bg-[#182e2e] w-[100%] h-[100%]'>
          <div className='md:grid md:grid-cols-5 px-[15%] mt-[10%]'>
            <div className='md:col-span-2'>
              <div className='text-3xl'><h1 className='md:text-8xl font-extrabold tracking-wide text-white'>
                Discover The <span className='text-[#f0d8a6]'>Wolf</span> In You.
              </h1></div>
              <h2 className='mt-4 text-white mb-10'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lorem magna, volutpat eget dapibus vel, convallis ut felis.
              </h2>
              <a href='/more'>
                <div className='flex justify-center '>
                  <div className='text-center mt-[5%] py-4 px-4 bg-[#f0d8a6] rounded-[30px] tracking-[.25em] text-[#182e2e] font-bold text-lg hover:cursor-pointer'>
                    <h1>LEARN MORE</h1>
                  </div>
                </div>
              </a>
            </div>
            <div className='pt-[25%] md:py-0 md:col-span-3'>
              <img src='./wolf.png' alt='wolf'/>
            </div>
          </div>
        </div>
      </div>
  );
}
