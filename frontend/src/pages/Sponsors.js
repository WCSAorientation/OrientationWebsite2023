import { NavBar } from "../components/NavBar";

export const  Sponsors = () => {
    return (
        <div className='bg-cover min-h-screen bg-[#182e2e] pb-[100px]'>
            <NavBar isDark={true}/>
            <h1 className='text-center pt-10 pb-3 text-white text-4xl font-extrabold'>
                <h1 className="md:text-6xl">OUR SPONSORS</h1>
            </h1>
            <h1 className='text-center  pt-[5%] pb-6 text-white text-xl font-semibold'>
                <h1 className="md:text-3xl">PLATNUIM</h1>
            </h1>
            <div className='flex justify-center mt-5'>
            <div className='bg-white rounded-[40px] p-[5%]  flex justify-center items-center'>
                <img src="/sponsorplaceholder.png" alt='placeholder'/>
            </div>
            </div>
        </div>
    );
}