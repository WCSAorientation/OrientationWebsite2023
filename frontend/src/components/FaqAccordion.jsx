import faqQuestions from "../data/faq-questions.json";
import React from "react";
import { Collapse } from "react-collapse" 
import {AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

const faqAccordion = ({open, toggle, question, answer}) => {
    return (
        <div className="pt-[10px]">
            <div className= "bg-[#F0D8A6] py-[25px] px-[50px] flex justify-between items-center cursor pointer" onClick={toggle}>
                <p className="text-[40px] font-semibold ">{question}</p>
                <div className="text-[30px]">
                    {open ? <AiOutlineMinus/> : <AiOutlinePlus />}
                </div>
            </div>

            <Collapse isOpened={open}>
                <div className="bg-[#F0D8A6] px-[50px] pb-[20px]>{desc}">{answer}</div>
            </Collapse>
        </div>
    )
}

export default faqAccordion