import{ AiOutlineSearch } from 'react-icons/ai';

export default function SearchInput() {
    return (
        <div className='flex bg-gray-100 items-center px-5 space-x-3 w-[200px] sm:w-[300px] lg:w-[500px] rounded-full'>
            <AiOutlineSearch size={30} />
            <input className='bg-transparent focus:outline-none w-full p-2px' type='text' placeholder="Enter a keyword"></input>
           
        </div>
    );
}