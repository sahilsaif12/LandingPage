import React, { useState } from 'react'

function ThirdPart() {
    const [want, setWant] = useState('prioritize')
    const obj={
        prioritize:{
            firstText:"We help your",
            impText:"Product team",
            lastText:"to priortise better based on our Impactful Insights",
            img:"t1"
        },
        perception:{
            firstText:"Know the ",
            impText:"Perception and Sentiment",
            lastText:"across different platforms like Twitter, Facebook, Linkedin and much more",
            img:"t2"
        },
        engage:{
            firstText:"Manage all",
            impText:"Reviews",
            lastText:"from Playstore, App store and Twitter in one place",
            img:"t3"
        },
        retain:{
            firstText:"With our ",
            impText:"Insights",
            lastText:"reduce the dropoffs in your funnel and help people engage better",
            img:"t4"
        },
        increase:{
            firstText:"Increase your",
            impText:"App Ranking",
            lastText:"on playstore and app Store.",
            img:"t5"
        },
    }
    
    let data=obj[want]

    return (
        <div className='bg-gray-950 pt-8 pb-20 border-b-8 border-double border-blue-900/60' style={{borderRadius:"0% 0% 94% 100% / 100% 100% 88% 23% "}} >
            <div className="container p-4  text-green-100">
                <div className="text-center font-bold text-3xl">I want to ...</div>
                <div className="flex justify-center gap-7 pt-4">


                    <a onClick={() =>setWant('prioritize')} href="#_" class="relative shadow-md shadow-blue-900/50 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#05c1ff] via-[#216bf5] to-[#1e00ff] group-hover:from-[#1e00ff] group-hover:via-[#216bf5] group-hover:to-[#05c1ff] absolute"></span>
                        <span class={`relative px-4 py-2.5 transition-all ease-out ${want=='prioritize' ?'bg-gradient-to-br from-[#1e00ff] via-[#216bf5] to-[#05c1ff]':'bg-gray-900'}  rounded-md group-hover:bg-opacity-0 duration-400`}>
                            <span class="relative text-white ">Prioritize Better</span>
                        </span>
                    </a>


                    <a  onClick={() =>setWant('perception')} href="#_" class="relative shadow-md shadow-blue-900/50 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#05c1ff] via-[#216bf5] to-[#1e00ff] group-hover:from-[#1e00ff] group-hover:via-[#216bf5] group-hover:to-[#05c1ff] absolute"></span>
                        <span class={`relative px-4 py-2.5 transition-all ease-out ${want=='perception' ?'bg-gradient-to-br from-[#1e00ff] via-[#216bf5] to-[#05c1ff]':'bg-gray-900'}  rounded-md group-hover:bg-opacity-0 duration-400`}>
                            <span class="relative text-white ">Know Perception</span>
                        </span>
                    </a>

                    <a  onClick={() =>setWant('engage')} href="#_" class="relative shadow-md shadow-blue-900/50 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#05c1ff] via-[#216bf5] to-[#1e00ff] group-hover:from-[#1e00ff] group-hover:via-[#216bf5] group-hover:to-[#05c1ff] absolute"></span>
                        <span class={`relative px-4 py-2.5 transition-all ease-out ${want=='engage' ?'bg-gradient-to-br from-[#1e00ff] via-[#216bf5] to-[#05c1ff]':'bg-gray-900'}  rounded-md group-hover:bg-opacity-0 duration-400`}>
                            <span class="relative text-white ">Engage</span>
                        </span>
                    </a>

                    <a  onClick={() =>setWant('retain')} href="#_" class="relative shadow-md shadow-blue-900/50 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#05c1ff] via-[#216bf5] to-[#1e00ff] group-hover:from-[#1e00ff] group-hover:via-[#216bf5] group-hover:to-[#05c1ff] absolute"></span>
                        <span class={`relative px-4 py-2.5 transition-all ease-out ${want=='retain' ?'bg-gradient-to-br from-[#1e00ff] via-[#216bf5] to-[#05c1ff]':'bg-gray-900'}  rounded-md group-hover:bg-opacity-0 duration-400`}>
                            <span class="relative text-white ">Retain Users</span>
                        </span>
                    </a>

                    <a  onClick={() =>setWant('increase')} href="#_" class="relative shadow-md shadow-blue-900/50 p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
                        <span class="w-full h-full bg-gradient-to-br from-[#05c1ff] via-[#216bf5] to-[#1e00ff] group-hover:from-[#1e00ff] group-hover:via-[#216bf5] group-hover:to-[#05c1ff] absolute"></span>
                        <span class={`relative px-4 py-2.5 transition-all ease-out ${want=='increase' ?'bg-gradient-to-br from-[#1e00ff] via-[#216bf5] to-[#05c1ff]':'bg-gray-900'}  rounded-md group-hover:bg-opacity-0 duration-400`}>
                            <span class="relative text-white ">Increase Ranking</span>
                        </span>
                    </a>
                </div>

                <div className="mt-12 flex justify-evenly text-gray-300 animate-fade animate-once animate-duration-[900ms] animate-ease-in animate-alternate">
                    <div className="text-xl font-medium self-center basis-1/3">{data.firstText}
                        <span class="mx-2 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-blue-800 relative inline-block">
                            <span class="relative text-white ">{data.impText}</span>
                        </span>
                        {data.lastText}</div>
                    <img className='h-58' src={require(`../Images/${data.img}.png`)} alt="" />
                    
                </div>
                

              


            </div>
        </div>
    )
}

export default ThirdPart