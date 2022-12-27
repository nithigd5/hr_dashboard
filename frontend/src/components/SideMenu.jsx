import { AiOutlineClose   } from 'react-icons/ai';


export default function SideMenu({ nav, setNav }) {
    return (
        <div className={nav ? 'fixed w-[300px] h-screen top-0 left-0 bg-white z-10 duration-300' :
            'fixed w-[300px] h-screen top-0 left-[-100%] bg-white z-10 duration-300'}>
            <AiOutlineClose onClick={() => setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer' />
            
            <h2 className='text-2xl absolute top-4'>HR<span className='font-bold p-2'>DASHBOARD</span></h2>
            <nav>
            <ul className='flex flex-col p-6 ml-0 mt-9 cursor-pointer'>
                <li className='text-xl py-3 flex text-gray-800'>eMPTY</li>
                <li className='text-xl py-3 flex'>Empty</li>
                <li className='text-xl py-3 flex'>Empty</li>
                <li className='text-xl py-3 flex'>Empty</li>
            </ul>
            </nav> 
            
        </div>); 
}