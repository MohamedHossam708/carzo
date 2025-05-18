import React from 'react'
import style from "./Login.module.css"
import logo from "../../assets/images/contant.png";
import loga from "../../assets/images/voltante-branco 2.png";
export default function Login() {
  return <>
  
  <div className=" flex ">
         <div className="w-80 mt-24 ml-36  ">
           <img src={logo} alt="" className="w-full" />
         </div>
 
         <div className="w-80 mt-20 ml-36">
           <img src={loga} alt="" />
           <form className="max-w-sm mx-auto">
             <div>
               <h2 className="font-black text-3xl py-10 ">
                 Welcome to Arabytak
               </h2>
             </div>
             <div className="mb-5">
               {/* <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label> */}
               <input
                 type="name"
                 id="name"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Your Username"
                 required
               />
             </div>
             <div className="mb-5">
               {/* <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label> */}
               <input
                 type="password"
                 id="password"
                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="Your Password"
                 required
               />
             </div>
             <div className="flex items-start mb-5">
               <div className="flex items-center h-5">
                 <input
                   id="remember"
                   type="checkbox"
                   value=""
                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                   required
                 />
               </div>
               <label
                 htmlFor="remember"
                 className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
               >
                 Remember me
               </label>
             </div>
             <button
               type="submit"
               className="text-white color focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
             >
               Submit
             </button>
           </form>
         </div>
       </div>
  
  </>
}
