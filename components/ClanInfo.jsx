"use client"
import React, { useState, useEffect, Suspense } from 'react'
import { styles } from '@/utils/styles'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
export default function ClanInfo({ data }) {

    return (
        <div id="info-page" className='container mx-auto mt-20'>
            <h2 className={`${styles.sectionHeadText} text-white text-center font-bold uppercase underline text-2xl mb-2`}>Clan Info</h2>
            <p className='text-md text-white justify-center items-center align-middle text-center'>{data?.description}</p>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4'>
                    {data?.infoData.map((item, index) => (
                        <div key={index} className="shadow-md rounded-lg flex items-center">
                            <div className="mr-4">
                                <Image alt={index} src={item.icon} width={24} height={24} priority />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold m-0">{item?.label}</h3>
                                <h3 className="text-base font-medium m-0">{item?.value}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='container mx-auto mt-20'>
                <h2 className={`${styles.sectionHeadText} text-white text-center font-bold uppercase underline text-2xl mb-2`}>Meet the Pillars</h2>
                <div className="container mx-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {data?.leaders.map((leader, index) => (
                            <LeaderCard key={index} leader={leader} />
                        ))}
                    </div>
                </div>
            </div>

        </div>

    );
};
function LeaderCard({ leader }) {
    return (
        <>
            <Card className="w-[250px] bg-[#463067] border-4 border-solid border-yellow-200 rounded-2xl p-6 transition-transform hover:scale-105">
                <CardContent>
                    <div className="w-full p-4">
                        <section>
                            <div className="col-span-3">
                                <div className="mt-6 relative h-20 flex justify-center items-center">
                                    <Image
                                        src={leader.imageSrc}
                                        alt={`${leader.name}'s profile picture`}
                                        height={60}
                                        width={60}

                                    />
                                </div>
                            </div>
                            <div className="col-span-3 mt-8">
                                <h2 className="text-white font-bold text-1xl tracking-wide text-center">
                                    {leader.name}
                                </h2>
                                <p className="text-emerald-400 font-semibold mt-2.5 text-center uppercase">
                                    {leader.role}
                                </p>
                            </div>
                        </section>
                    </div>
                </CardContent>
            </Card>
        </>

    );
}


