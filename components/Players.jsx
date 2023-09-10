"use client"
import LeaderCard from "./Leadercard";



export default function Players({ data }) {
    const refineddata = {
        players: data?.members
    }
    return (
        <>
            <LeaderCard data={refineddata} />
        </>
    );
}