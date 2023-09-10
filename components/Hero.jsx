"use client"
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/utils/motion";
const Hero = () => {
    return (
        <section>
            <div className="flex flex-col items-center">
                <motion.h1 variants={fadeIn('left', 0.2)} initial="hidden" whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }} className="text-6xl text-[#050816] uppercase z-10 mb-0 select-none">Chennai Heroes</motion.h1>
                <motion.h2 variants={fadeIn('right', 0.2)} initial="hidden" whileInView={'show'}
                    viewport={{ once: false, amount: 0.7 }} className="text-3xl text-[#050816] uppercase z-10 mt-0 select-none">Where Legends are Born</motion.h2>
                <div>
                    <Image src={"/home-banner.jpg"} fill />
                </div>
                <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'>
                    <a href='#info-page'>
                        <div className='w-[35px] h-[64px] rounded-3xl border border-white flex justify-center items-start p-2 bg-[#050816]'>
                            <motion.div
                                animate={{
                                    y: [0, 24, 0],
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                }}
                                className='w-3 h-3 rounded-full bg-white mb-1'
                            />
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero
