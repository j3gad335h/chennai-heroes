"use client"
import React, { useState, useEffect, Suspense } from 'react'
import { styles } from '@/utils/styles'

import Image from 'next/image'
export default function ClanInfo({ data }) {

    return (
        <div className='container mx-auto'>
            <h2 className={`${styles.sectionHeadText} text-white text-center uppercase`}>Clan Info</h2>
            <p className='text-md text-white justify-center items-center align-middle text-center'>{data?.description}</p>
            <div className='grid grid-cols-3 gap-4 mb-4'>
                {data?.infoData.map((item, index) => (
                    <div key={index} className="shadow-md rounded-lg flex items-center">
                        <div className="mr-4">
                            <Image src={item.icon} width={24} height={24} priority />
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold m-0">{item?.label}</h3>
                            <h3 className="text-base font-medium m-0">{item?.value}</h3>
                        </div>
                    </div>
                ))}
            </div>
            <h2 className={`${styles.sectionHeadText} text-white text-center uppercase`}>Meet the Leaders</h2>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.leaders.map((leader, index) => (
                        <LeaderCard key={index} leader={leader} />
                    ))}
                </div>
            </div>
        </div>

    );
};
function LeaderCard({ leader }) {
    return (
        <div className="w-full p-4">
            <section className="bg-[#463067] border-4 border-solid border-yellow-200 rounded-2xl p-6 transition-transform hover:scale-105">
                <div className="col-span-3">
                    <div className="mt-6 flex justify-center items-center">
                        <Image
                            src={leader.imageSrc}
                            alt={`${leader.name}'s profile picture`}
                            width={160}
                            height={160}

                        />
                    </div>
                </div>
                <div className="col-span-3 mt-8">
                    <h2 className="text-white font-bold text-2xl tracking-wide text-center">
                        {leader.name}
                    </h2>
                    <p className="text-emerald-400 font-semibold mt-2.5 text-center uppercase">
                        {leader.role}
                    </p>
                </div>
            </section>
        </div>
    );
}


