import React, {useState} from 'react';
import { NavBar } from "../components/NavBar";
import FaqAccordion from '../components/FaqAccordion';
import faqQuestions from '../data/faq-questions.json';


export default function Faq() {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null)
    }

    setOpen(index)
  }
  return (
    <>
      <body className="bg-[#182E2E]">
        <NavBar isDark={true} />
        <div className='columns-2 gap-8 px-[15%] py-[2%]'>
          <div className=''>
            <h1 className='mb-[-5%] md:mb-[10%] col-1 text-4xl first-letter:text-5xl  first-letter:font-extrabold font-bold text-white first-letter:text-[#f0d8a6]'>
              <h1 className="md:text-[70px] md:first-letter:text-[87px]">Frequently</h1>
            </h1>
            <h1 className='mb-[-5%] md:mb-[10%] col-1 text-4xl first-letter:text-5xl  first-letter:font-extrabold font-bold text-white first-letter:text-[#f0d8a6]'>
              <h1 className="md:text-[70px] md:first-letter:text-[87px]">Asked</h1>
            </h1>
            <h1 className='col-1 text-4xl first-letter:text-5xl first-letter:font-extrabold font-bold text-white first-letter:text-[#f0d8a6]'>
              <h1 className="md:text-[70px] md:first-letter:text-[87px]">Questions</h1>
            </h1>
          </div>
          <div className='pt-[20px] md:pt-0'>
            <img src='./pawprint.svg' alt='pawprint'/>
          </div>
        </div>
        <main className="grid place-items-centre pb-10">
          <div className='w-1065/1440'>

            {faqQuestions.map((data, index) => {
              return <FaqAccordion key={index} question={data.question} answer={data.answer} toggle={() => toggle(index)} />;
            })}
          </div>

        </main>
      </body>
    </>
  );
}
