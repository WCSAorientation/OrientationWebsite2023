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
      <body className="bg-[#182E2E] min-h-max">
        <NavBar isDark={true} />
        <main className="h-screen grid place-items-centre">
          <div className='w-1065/1440'>

            {faqQuestions.map((data, index) => {
              return <FaqAccordion key={index} open={index === open} question={data.question} answer={data.answer} toggle={() => toggle(index)} />;
            })}
          </div>

        </main>
      </body>
    </>
  );
}
