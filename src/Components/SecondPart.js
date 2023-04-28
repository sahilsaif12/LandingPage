import React from 'react'

function SecondPart() {
  return (
    <div>
    <div className="container  md:p-5 text-slate-300  ">
        <div className="font-bold pt-4 text-2xl text-center tracking-wide">
        Trusted by world’s top companies across globe
        </div>
        <di className="flex flex-wrap justify-center gap-7 p-4 mt-4">
            <img src={require('../Images/company1.png')} className='w-40 h-20 hover:animate-pulse '  alt="" />
            <img src={require('../Images/company2.png')} className='w-40 h-20 hover:animate-pulse ' alt="" />
            <img src={require('../Images/company3.png')} className='w-40 h-20 hover:animate-pulse ' alt="" />
            <img src={require('../Images/company4.png')} className='w-40 h-20 hover:animate-pulse ' alt="" />
            <img src={require('../Images/company5.png')} className='w-40 h-20 hover:animate-pulse ' alt="" />
            <img src={require('../Images/company6.png')} className='w-40 h-28 hover:animate-pulse ' alt="" />
            <img src={require('../Images/company7.png')} className='w-32 h-30 hover:animate-pulse ' alt="" />
        </di>
    </div>
    </div>
  )
}

export default SecondPart