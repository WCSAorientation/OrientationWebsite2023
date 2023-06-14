import { NavBar } from "../components/NavBar";

export const  Schedule = () => {
    return (
        <div className='bg-cover min-h-screen bg-[#182e2e] pr-[18px]'>
            <NavBar isDark={true}/>
            <h1 className='text-center pt-[100px] pb-6 text-white text-6xl text-bold'>SCHEDULE</h1>
            <div className='flex justify-center mt-10'>
            <div className='mx-[10%] bg-white rounded-[40px] w-[1056px] h-[585px]'>
            </div>
            </div>
        </div>
    );
}