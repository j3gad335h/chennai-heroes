import React from "react";
import { getMethod } from "@/utils/apiCall";
import { endpoints } from "@/utils/constant";
import PlayerTable from "@/components/PlayerTable";
import { bearer } from "@/utils/constant";
async function getData() {
    const headers = {
        Authorization: `Bearer ${bearer}`,
    };
    const response = await getMethod(endpoints.currentWar, null, headers);

    const participants = response?.clan?.participants
    return participants
}
export default async function Page() {

    const data = await getData()



    return (
        <>
            <div className="container mx-auto">
                <PlayerTable rows={data} />
            </div>

        </>
    );
}
