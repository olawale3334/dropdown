 import logo  from '/logo.svg'
 import menu from '/icon-menu.svg'
 import todo from "/icon-todo.svg";
 import calendar from "/icon-calendar.svg";
 import reminder from "/icon-reminders.svg";
 import planing from "/icon-planning.svg";
function Nav() {
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
                    <a href=""><li>About</li></a>
                 </div>
                </div>
                 <div className='md:flex items-center gap-5 hidden'>
                    <button>Login</button>
                    <button className='bg-slate-50 border-[1px] px-3 py-1 rounded-lg border-black'>Register</button>
                 </div>
                  <div className='md:hidden flex justify-center items-center '>
                    <img className='w-7' src={menu} alt="" />
                 </div>
            </div>
         </nav>
        </>
    )
}
 export default Nav