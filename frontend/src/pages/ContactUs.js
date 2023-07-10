import { NavBar } from "../components/NavBar";
import ContactUsForm from '../components/ContactUsForm';

export default function ContactUs() {
    return (
        <>
            <body className="bg-[#182E2E]">
                <NavBar isDark={true} />
                <div className='columns-2 gap-8 px-[5%] py-[7%]'>
                    <div className=''>
                        <h1 className='mb-[-5%] col-1 text-[87px]   first-letter:font-extrabold font-bold text-[#f0d8a6]'>Connect</h1>
                        <h1 className='mb-[-5%] col-1 text-[87px]   first-letter:font-extrabold font-bold text-white'>With Us!</h1>

                    </div>
                    <img src='./pawprint.svg' alt='pawprint' />
                </div>
                <main className="grid place-items-centre pb-10">
                    <div className='w-1065/1440'>
                        <ContactUsForm />
                    </div>

                </main>
            </body>
        </>
    );
}