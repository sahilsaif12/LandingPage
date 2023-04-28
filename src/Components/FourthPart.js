import React, { useEffect } from 'react'
import AOS from 'aos'
function FourthPart() {
   
  return (
    <div>
        <div className="container p-5 text-gray-300">

            <div className="text-3xl text-center font-bold">Integrations</div>
            <div className="flex p-12  justify-between">
            <div className="text-xl font-medium self-center">
            Integrate seamlessly with your <br />
            <span className='underline decoration-dotted decoration-4 underline-offset-8  decoration-violet-500 text-orange-400'>
                Favourite Apps
            </span> 
            </div>
            <div  className="animation flex flex-wrap gap-9  basis-2/3 justify-end">
                <img src={require('../Images/f1.png')} alt="" data-aos="zoom-in" data-aos-delay="" className="basis-1/3 invert animate-shake  animate-duration-\  animate-ease-linear animate-delay-1000 animate-alternate animate-fill-forwards" />
                <img src={require('../Images/f4.png')} alt="" data-aos="zoom-in" data-aos-delay="500" className="basis-1/3 animate-shake  animate-duration-1000 animate-delay-[2000ms] animate-ease-linear animate-alternate animate-fill-forwards " />
                <img src={require('../Images/f2.png')} alt="" data-aos="zoom-in" data-aos-delay="1000" className="basis-1/3 animate-shake  animate-duration-1000 animate-delay-[3000ms] animate-ease-linear animate-alternate animate-fill-forwards " />
                <img src={require('../Images/f3.png')} alt="" data-aos="zoom-in" data-aos-delay="1500" className="basis-1/3 animate-shake  animate-duration-1000 animate-delay-[4000ms] animate-ease-linear animate-alternate animate-fill-forwards invert" />
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default FourthPart