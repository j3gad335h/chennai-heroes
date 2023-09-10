import Image from "next/image";
import { styles } from "@/utils/styles";
import formatLastSeenDate from "@/utils/lastSeen";
export default function LeaderCard({ data }) {
    console.log(data)
    return (
        <div className='container mx-auto'>
            <h2 className={`${styles.sectionHeadText} text-white text-center uppercase`}>Top Players</h2>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.players.map((leader, index) => (
                        <div className="w-full p-4">
                            <section className="bg-[#463067] border-4 border-solid border-yellow-200 rounded-2xl p-6 transition-transform hover:scale-105">
                                <div class="flex items-center justify-between">
                                    <span class="text-gray-400 text-sm">{formatLastSeenDate(leader?.lastSeen)}</span>
                                    <span class="text-emerald-400 flex items-center justify-between">
                                        <Image src={"https://cdn.royaleapi.com/static/img/ui/64x64/trophy-fs8.png"} width={24} height={24} className="mr-2" />
                                        {leader?.trophies}
                                    </span>
                                </div>
                                <div className="col-span-3">
                                    <div className="mt-6 flex justify-center items-center">
                                        <Image
                                            src={"/players.png"}
                                            alt={`${leader?.name}'s profile picture`}
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
                    ))}
                </div>
            </div>
        </div>

    );
}
