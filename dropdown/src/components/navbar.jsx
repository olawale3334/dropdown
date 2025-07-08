 import logo  from '/logo.svg'
 import menu from '/icon-menu.svg'
 import todo from "/icon-todo.svg";
 import calendar from "/icon-calendar.svg";
 import reminder from "/icon-reminders.svg";
 import planing from "/icon-planning.svg";
 import close from "/icon-close-menu.svg";
import { useState } from 'react';

function Nav() {
     const[toggle,setToggle] = useState (false)

     function hamburgar(params) {
        setToggle(!toggle)
     }



    return(
        <>
         <nav>
            <div className=" text-gray-500 flex justify-between  items-center m-4"> 
                <div className='flex items-center  space-x-12'>
                    <div className='flex items-center justify-center' >
                        <img className=' w-15' src={logo} alt="" />
                    </div>
                 <div className='list-none md:flex items-center space-x-5 hidden '>
                  
                    <div class="relative group inline-block">
                    
                    <div className="flex items-center gap-1 cursor-pointer">
                        Features
                        <svg
                        class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    
                    <div className="absolute right-0 mt-4 hidden group-hover:block w-48 bg-white shadow-lg rounded-xl py-3 px-4 z-50">
                         <div className="flex items-center justify-center gap-2 text-gray-600  cursor-pointer text-sm">
                       <a href="">  <span className='flex items-center gap-3'> <img src={todo} alt="" />Todo List</span></a>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-gray-600  text-sm mt-2">
                        <a href=""><span className='flex items-center gap-3'> <img src={calendar} alt="" /> Calendar</span> </a>
                        </div>
                        <div className="flex items-center justify-center  gap-2 text-gray-600  text-sm mt-2">
                       <a href=""> <span className='flex items-center gap-3'><img src={reminder} alt="" /> Reminders</span> </a>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 justify-center  text-sm mt-2">
                       <a href=""> <span className='flex items-center gap-3'><img src={planing} alt="" /> Planning</span> </a>
                        </div>
                    </div>
                    </div>

                     <div className="relative group">
                   
                    <div className="flex items-center gap-1 cursor-pointer ">
                        Company
                        <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                        />
                        </svg>
                    </div>
                    <div className="absolute left-0 mt-4 hidden group-hover:block w-32 bg-white shadow-lg rounded-xl py-3 px-4 z-50">
                        <div className="text-gray-600 hover:font-semibold cursor-pointer text-sm">
                        <a href="#">History</a>
                        </div>
                        <div className="text-gray-600 hover:font-semibold cursor-pointer text-sm mt-2">
                        <a href="#">Our Team</a>
                        </div>
                        <div className="text-gray-600 hover:font-semibold cursor-pointer text-sm mt-2">
                        <a href="#">Blog</a>
                        </div>
                    </div>
                    </div>


                    
                    <a href=""><li>Careers</li></a>
                    <a href=""><li className=' hover:text-black '>About</li></a>
                 </div>
                </div>
                 <div className='md:flex items-center gap-5 hidden'>
                    <button className=' hover:text-black '>Login</button>
                    <button className='bg-slate-50 border-[1px] px-3 py-1 rounded-lg border-black hover:text-black '>Register</button>
                 </div>
                  <div className='md:hidden flex justify-center z-50 items-center '>
                   <button onClick={hamburgar}><img  className='w-7' src={toggle? close:menu} alt="" /></button> 
                 </div>


                  <div className={toggle ? "md:hidden h-screen fixed w-[70%] bottom-0 right-0 flex flex-col gap-4 p-4 bg-white  pt-16 rounded-lg " : "hidden"}>

                  {/* Features Dropdown */}
                  <details className="">
                     <summary className="flex justify-between mt-10 items-center cursor-pointer text-gray-700 font-medium list-none">
                        Features
                        <svg
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                     </summary>

                     <div className="mt-2 pl-4 space-y-2 text-sm text-gray-600">
                        <a href="#" className="flex items-center gap-2">
                        <img src={todo} alt="" className="w-4 h-4" /> Todo List
                        </a>
                        <a href="#" className="flex items-center gap-2">
                        <img src={calendar} alt="" className="w-4 h-4" /> Calendar
                        </a>
                        <a href="#" className="flex items-center gap-2">
                        <img src={reminder} alt="" className="w-4 h-4" /> Reminders
                        </a>
                        <a href="#" className="flex items-center gap-2">
                        <img src={planing} alt="" className="w-4 h-4" /> Planning
                        </a>
                     </div>
                  </details>

                  <details className="group">
                     <summary className="flex justify-between items-center cursor-pointer text-gray-700 font-medium list-none">
                        Company
                        <svg
                        className="w-4 h-4 transition-transform duration-300 group-open:rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                     </summary>

                     <div className="mt-2 block pl-4 space-y-2 text-sm text-gray-600">
                        <p><a href="#">History</a></p>
                        <p><a href="#">Our Team</a></p>
                        <p><a href="#">Blog</a></p>
                     </div>
                  </details>

                  {/* Other Links */}
                  <a href="#" className="text-gray-700 text-sm">Careers</a>
                  <a href="#" className="text-gray-700 text-sm">About</a>

                  {/* Auth Buttons */}
                  <div className="flex flex-col gap-3 mt-4">
                     <button className="text-gray-700">Login</button>
                     <button className="bg-slate-50 border border-black rounded-lg px-4 py-2 text-sm">
                        Register
                     </button>
                  </div>
                  </div>
            </div>
         </nav>
        </>
    )
}
 export default Nav