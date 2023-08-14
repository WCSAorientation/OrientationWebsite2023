import React from "react";
import { useState } from "react";
import {Collapse} from 'react-collapse';

export default function FaqAccordion({question, answer}) {
    const [opened, setOpened] = useState(false);

    return (
        <div className="pb-[20px]">
            <div className= "bg-[#F0D8A6] py-[20px] px-[20px] md:px-[50px] mx-[10%] rounded-[20px] text-[#182E2E] cursor-pointer" onClick={(e) => {e.preventDefault();setOpened(!opened)}}>
                <div className="flex justify-between items-center">
                    <p className="text-[25px] font-semibold ">{question}</p>
                    <div className="text-[30px] text-[#182E2E]">
                        {opened ? 
                        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7"/>
                        </svg> : 
                        <svg class="w-6 h-6 text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
                        </svg>
                        }
                    </div>
                </div>
                <Collapse isOpened={opened}>
                    <div className={"bg-[#F0D8A6] md:px-[50px] font-medium text-md pb-[20px]>{desc} transition-all delay-150 duration-300 overflow-hidden w-full "}>
                        <h1 className="md:text-lg">{answer}</h1>
                    </div>
                </Collapse>
            </div>
        </div>
    )
}