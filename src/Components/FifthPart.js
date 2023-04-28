import React from 'react'

function FifthPart() {
  return (
    <div className=" bg-slate-800 bg-gradient-to-t from-gray-800  to-slate-950 " style={{borderRadius:"81% 0% 94% 100% / 100% 100% 0% 0% "}}>

    
    <div className="container p-5 text-gray-300 ">

    <div className="text-3xl text-center font-bold">Reviews Channel</div>
    <div className="flex p-12  justify-between">
    <div className="text-xl basis-1/2  font-medium self-center">
    <span className='underline mx-1 decoration-dotted decoration-4 underline-offset-8  decoration-violet-500 text-orange-400'>
        Save hours 
    </span> 
    while monitoring your App  Reviews and Ratings every week 
    <div className="flex flex-wrap font-normal pt-6 gap-5">
    <div className="basis-1/3 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        Playstore
    </div>
    <div className="basis-1/3 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        Facebook
    </div>
    <div className="basis-1/3 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        App Store
    </div>
    <div className="basis-1/3 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        Linkedin
    </div>
    <div className="basis-1/3 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        Twitter
    </div>
    <div className="basis-1/2 flex gap-2 items-center">
        <span className="bg-blue-700  w-8 h-8 rounded-full flex items-center justify-center ">◀</span>
        much more...


    </div>
    </div>
    </div>
    <div  className="animation flex flex-wrap gap-9  basis-2/3 justify-end">
        <img src={require('../Images/slide1.png')} alt="" data-aos="fade-left" data-aos-delay="" className="basis-1/2 " />
    </div>
    </div>
</div>
</div>
  )
}

export default FifthPart