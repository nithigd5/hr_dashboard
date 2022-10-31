import React from "react";
import{FaUserAlt} from 'react-icons/fa'
import{AiFillLock} from 'react-icons/ai'

const Login = ( ) => {
    return(
        <div className="flex  items-center h-screen justify-center">
            <img className="absolute w-full opacity-90" src="./Images/mb.jpg" alt=""/>
            <div className=" flex  relative ">
        <div className="  flex flex-col items-center container mx-auto w-80  rounded-xl shadow-sm   bg-white  o">
            <img className="w-20 m-5" src="./Images/mashreq.png" alt='/'/>
          
            <div >
            <div className="flex flex-row">
               <label className="pr-5 pt-3"> <FaUserAlt size={18}/></label>
                <input className="w-full bg-gray-50  py-2  outline-none  rounded-mg  mb-5" type="email" placeholder=" Enter your Username" ></input>
                 
            </div>
            <div className="flex flex-row">
                <label className="pr-5 pt-3"><AiFillLock size={20}/></label>
                <input className="w-full bg-gray-50  py-2 outline-none rounded-mg" type="password" placeholder=" Enter your Password"></input>
                
            </div>
            <div>
                <button className="w-full h-auto text-white rounded-xl py-2 bg-orange-400 mt-5 mb-5 font-bold hover:bg-blue-800" >LOGIN</button>
            </div>
            </div>

        </div>
       </div>
        </div>
       
    )
};
export default Login 