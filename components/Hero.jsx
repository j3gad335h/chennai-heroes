"use client"
import React from 'react'
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/utils/motion";
const Hero = () => {
    return (
        <section>
            <div className="relative w-full">
                <Image
                    src="/home-banner.jpg"
                    alt="Banner Image"
                    layout="responsive"
                    width={1920}
                    height={1080}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full z-10 hidden md:block">
                    <motion.h1
                        variants={fadeIn('left', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-6xl text-[#050816] uppercase z-10 mb-0 select-none"
                    >
                        Chennai Heroes
                    </motion.h1>
                    <motion.h2
                        variants={fadeIn('right', 0.2)}
                        initial="hidden"
                        whileInView={'show'}
                        viewport={{ once: false, amount: 0.7 }}
                        className="text-3xl text-[#050816] uppercase z-10 mt-0 select-none"
                    >
                        Where Legends are Born
                    </motion.h2>
                </div>
                <div className='absolute bottom-0 w-full flex justify-center items-center z-10 mb-10'>
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
