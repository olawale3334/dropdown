 import hero from '/image-hero-desktop.png'
 import client1 from '/client-audiophile.svg'
 import client2 from '/client-databiz.svg'
 import client3 from '/client-maker.svg'
 import client4 from '/client-meet.svg'
  import mobile from '/image-hero-mobile.png'


 
 function Hero() {
    return(
        < >
        <div className=' min-h-screen  '>
        <div className='  flex flex-col md:flex-row  mt-[5rem] justify-center items-stretch'>
              <div className=' md:hidden flex justify-center w-full px-6 mb-8 '>
                <img className=' w-full max-w-sm h-auto  object-contain ' src={mobile} alt="" />
               </div>

            <div className='flex flex-col justify-between px-4'>
                <div className='mt-5'>
                 <p className="hidden md:block font-bold text-4xl  md:text-7xl leading-tight ">
                   Make <br/> remote work
                </p>

                 <p className='md:hidden text-4xl font-bold text-center'>Make remote work</p>

                <p className=' text-gray-500 mt-9  leading-6 md:text-[1rem] w-full max-w[400px] md:w-[400px] '>Get your team in sync, no matter your location. Streamline processes,create team ritual, and watch productivity soar </p>
                <div className=' hidden md:block mt-9'>
                    <button className='bg-black text-white px-6 py-2 rounded-md'>Learn more</button>
                </div>
                <div className='md:hidden flex justify-center mt-7'>
                    <button className='bg-black text-white px-6 py-2 rounded-md'>Learn more</button>
                </div>
                </div>
                <div className=' flex items-center gap-4 mt-[7rem] justify-center md:justify-start '>
                    <img className='w-20 md:w-[8rem]' src={client2} alt="" />
                    <img className='w-20 md:w-[8rem]' src={client1} alt="" />
                    <img className='w-20 md:w-[8rem]' src={client4} alt="" />
                    <img className='w-20 md:w-[8rem]' src={client3} alt="" />
                </div>
            </div>
            <div className=' hidden md:block items-end justify-center md:justify-end'>
                <img className='md:w-[30rem] h-[32rem] object-contain ' src={hero} alt="" />
            </div>
            

        </div>
        </div>
        </>
    )
}
export default Hero