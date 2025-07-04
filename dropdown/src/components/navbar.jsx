 import logo  from '/logo.svg'
 import menu from '/icon-menu.svg'
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
                    <a href=""><li className=''>Features</li></a>
                    <a href=""><li>Company</li></a>
                    <a href=""><li>Careers</li></a>
                    <a href=""><li>About</li></a>
                 </div>
                </div>
                 <div className='md:flex items-center gap-5 hidden'>
                    <button>Login</button>
                    <button className='bg-slate-50 border-[1px] px-3 py-1 rounded-lg border-black'>Register</button>
                 </div>
                  <div className='md:hidden flex justify-center items-center items-center'>
                    <img className='w-7' src={menu} alt="" />
                 </div>
            </div>
         </nav>
        </>
    )
}
 export default Nav