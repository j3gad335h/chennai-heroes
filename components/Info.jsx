
import React, { Suspense } from 'react'
import ClanInfo from './ClanInfo'
import LoadingSkeleton from '@/utils/loadingSkeleton'
import { endpoints, bearer } from '@/utils/constant'
import { getMethod } from '@/utils/apiCall'
import Players from './Players'
async function getData() {
    const headers = {
        Authorization: `Bearer ${bearer}`,
    };
    const response = await getMethod(endpoints.claninfo, null, headers);
    const infoData = [
        {
            label: 'Clan Score',
            value: response?.clanScore,
            icon: "https://cdn.royaleapi.com/static/img/ui/trophy-ribbon.png?t=032a2d59c"
        },
        {
            label: 'Clan War Trophies',
            value: response?.clanWarTrophies,
            icon: "https://cdn.royaleapi.com/static/img/ui/64x64/cw-trophy.png"
        },
        {
            label: 'Required Trophies',
            value: response?.requiredTrophies,
            icon: "https://cdn.royaleapi.com/static/img/ui/trophy.png?t=6f676365c"
        },
        {
            label: 'Donations Per Week',
            value: response?.donationsPerWeek,
            icon: "https://cdn.royaleapi.com/static/img/ui/cards.png?t=04ecfa70c"
        },
        {
            label: 'Members',
            value: response?.members,
            icon: "https://cdn.royaleapi.com/static/img/ui/social.png?t=81a72ae0c"
        },
        {
            label: 'Location',
            value: response?.location?.name,
            icon: "https://cdn.royaleapi.com/static/img/flags/_int.svg"
        },
    ];
    // Filter members with role "leader" or "co-leader"
    const leaders = response?.memberList.filter(
        (memberList) => memberList.role === 'leader' || memberList.role === 'coLeader' || memberList.role === 'elder'
    );
    const roleOrder = {
        leader: 0,
        coLeader: 1,
        elder: 2,
    };
    const roleImages = {
        leader: '/leader.png',
        coLeader: 'coLeader.png',
        elder: 'elder.png',
    };
    // Extract names and roles of leader and co-leader
    const leaderAndCoLeaderData = leaders
        .map((member) => ({
            name: member?.name,
            role: member?.role,
            trophies: member?.trophies,
            lastSeen: member?.lastSeen,
            imageSrc: roleImages[member?.role], // Assign the appropriate image source based on the role
        }))
        .sort((a, b) => roleOrder[a.role] - roleOrder[b.role]);
    const data = {
        description: response?.description,
        infoData: infoData,
        leaders: leaderAndCoLeaderData,
        members: (response?.memberList || []).slice(0, 6) // Limit to the first 10 members
    }
    return data
}
export default async function Info() {
    const data = await getData()
    return (
        <>
            <section>
                <Suspense fallback={<LoadingSkeleton />}>
                    <ClanInfo data={data} />
                    <Players data={data} />
                </Suspense>
            </section>

        </>
    )
}


