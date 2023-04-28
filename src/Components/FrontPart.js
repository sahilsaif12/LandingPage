import React from 'react'
import Slider from './Slider'

function FrontPart() {
    return (
        <div className="   border-b-8 border-double border-blue-900/60 bg-gradient-to-b from-gray-800  to-slate-950 py-4 "  style={{borderRadius:"0% 0% 57% 100% / 100% 100% 10% 84% "}}>
        <div className="container">
            <div className="  mx-auto pt-4 underline underline-offset-8 decoration-blue-500/60 decoration-dotted decoration-4  text-slate-100 text-5xl  tracking-wider leading-normal noto-sans font-extrabold ">
                Priortise your next feature with <br />
                Impactful Insights
            </div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="divide-y divide-gray-500 divide-dashed pt-20 text-stone-200 font-serif text-2xl tracking-wider">
                    <p className="animate-fade-up animate-ease-in animate-duration-[600MS]">
                        🎯 Drive organic growth
                    </p>
                    <p className="animate-fade-up pt-2 animate-ease-in animate-duration-[600MS] animate-delay-[600MS]">
                        💡 Uncover competitor insights
                    </p>
                    <p className="animate-fade-up pt-2 animate-ease-in animate-duration-[600MS] animate-delay-[1200MS]">
                        📈 Level up your User Experience
                    </p>
                </div>
                <Slider/>
            </div>
        </div>
        </div>
    )
}

export default FrontPart