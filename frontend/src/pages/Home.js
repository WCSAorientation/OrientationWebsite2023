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
            <h1 className='font-bold pt-4 pb-1 px-10 md:px-0 md:py-10 md:text-2xl'>September 4th, 9:00 a.m. – September 9th, 11:00 p.m.</h1>
          </div>
          <a href='https://www.woodsworth-orientation.com/event-details/woodsworth-orientation-2023'>
          <div className='flex justify-center'>
          <div className='text-center mt-[20%] md:mt-[5%] py-2 px-5 relative bg-[#182e2e] rounded-[30px] tracking-[.25em] text-white font-bold text-lg hover:cursor-pointer'>
            <h1>BUY TICKETS </h1>
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
              Orientation is our biggest event of the year and is an excellent way to become familiar with the  Woodsworth community before the school year begins. This year's orientation program will run from Monday September 4th to Saturday September 9th. We've planned an entire week full of fun and comprehensive events to smoothen your transition into university.
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
