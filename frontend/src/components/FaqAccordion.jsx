import faqQuestions from "../data/faq-questions.json";
import React from "react";
import { Collapse } from "react-collapse" 
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const faqAccordion = ({open, toggle, question, answer}) => {
    return (
        <div className="pb-[20px]">
            <div className= "bg-[#F0D8A6] py-[20px] px-[50px] mx-[10%] rounded-[20px] text-[#182E2E] cursor-pointer" onClick={toggle}>
                <div className="flex justify-between items-center">
                    <p className="text-[25px] font-semibold ">{question}</p>
                    <div className="text-[30px]">
                        {open ? <AiOutlineMinus/> : <AiOutlinePlus />}
                    </div>
                </div>
                <Collapse isOpened={open}>
                    <div className="bg-[#F0D8A6] px-[50px] font-medium text-lg pb-[20px]>{desc}">{answer}</div>
                </Collapse>
            </div>
        </div>
    )
}

export default faqAccordion