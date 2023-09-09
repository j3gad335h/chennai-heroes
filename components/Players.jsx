"use client"
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZoneName: 'short',
    });
};
const columns = [
    { id: 'clanRank', label: 'Rank', minWidth: 50 },
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'role', label: 'Role', minWidth: 170 },
    {
        id: 'lastSeen',
        label: 'Last Seen',
        minWidth: 170,
        align: 'left',
        format: (value) => formatDate(value),
    },
    { id: 'trophies', label: 'Trophies', minWidth: 170 },

];




const memberlist = [
    {
        "tag": "#8LRQQV9C",
        "name": "vishal",
        "role": "member",
        "lastSeen": "20230908T080708.000Z",
        "expLevel": 46,
        "trophies": 7355,
        "arena": {
            "id": 54000016,
            "name": "Arena 19"
        },
        "clanRank": 1,
        "previousClanRank": 1,
        "donations": 176,
        "donationsReceived": 280,
        "clanChestPoints": 0
    },
    {
        "tag": "#Q0U8U2JC",
        "name": "hari",
        "role": "member",
        "lastSeen": "20230908T180142.000Z",
        "expLevel": 42,
        "trophies": 7099,
        "arena": {
            "id": 54000016,
            "name": "Arena 19"
        },
        "clanRank": 2,
        "previousClanRank": 3,
        "donations": 432,
        "donationsReceived": 464,
        "clanChestPoints": 0
    },
    {
        "tag": "#YYUG9QVQ",
        "name": "shreyash",
        "role": "member",
        "lastSeen": "20230908T175420.000Z",
        "expLevel": 46,
        "trophies": 7052,
        "arena": {
            "id": 54000016,
            "name": "Arena 19"
        },
        "clanRank": 3,
        "previousClanRank": 2,
        "donations": 462,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#Y8RJ8G0Y2",
        "name": "ROSEN",
        "role": "member",
        "lastSeen": "20230908T170353.000Z",
        "expLevel": 41,
        "trophies": 7028,
        "arena": {
            "id": 54000016,
            "name": "Arena 19"
        },
        "clanRank": 4,
        "previousClanRank": 5,
        "donations": 908,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#20VPJR90V",
        "name": "ÇÎJÎÑ mass",
        "role": "member",
        "lastSeen": "20230908T115603.000Z",
        "expLevel": 45,
        "trophies": 7001,
        "arena": {
            "id": 54000016,
            "name": "Arena 19"
        },
        "clanRank": 5,
        "previousClanRank": 4,
        "donations": 644,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#V8GJCC90",
        "name": "VICHHU",
        "role": "member",
        "lastSeen": "20230908T164044.000Z",
        "expLevel": 42,
        "trophies": 6842,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 6,
        "previousClanRank": 6,
        "donations": 471,
        "donationsReceived": 440,
        "clanChestPoints": 0
    },
    {
        "tag": "#P8RJV2PRG",
        "name": "abhi",
        "role": "member",
        "lastSeen": "20230908T110017.000Z",
        "expLevel": 37,
        "trophies": 6793,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 7,
        "previousClanRank": 7,
        "donations": 130,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#9P02PJGVQ",
        "name": "SANJAY DARKSOUL",
        "role": "member",
        "lastSeen": "20230908T174754.000Z",
        "expLevel": 41,
        "trophies": 6687,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 8,
        "previousClanRank": 8,
        "donations": 0,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#QCQY02J9G",
        "name": "Prince charm",
        "role": "member",
        "lastSeen": "20230908T130841.000Z",
        "expLevel": 41,
        "trophies": 6653,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 9,
        "previousClanRank": 9,
        "donations": 346,
        "donationsReceived": 120,
        "clanChestPoints": 0
    },
    {
        "tag": "#2G200QLP",
        "name": "BellaCiao",
        "role": "coLeader",
        "lastSeen": "20230908T103144.000Z",
        "expLevel": 45,
        "trophies": 6628,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 10,
        "previousClanRank": 10,
        "donations": 310,
        "donationsReceived": 80,
        "clanChestPoints": 0
    },
    {
        "tag": "#QLJQ2PPQC",
        "name": "Dan",
        "role": "member",
        "lastSeen": "20230908T175953.000Z",
        "expLevel": 40,
        "trophies": 6618,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 11,
        "previousClanRank": 14,
        "donations": 275,
        "donationsReceived": 40,
        "clanChestPoints": 0
    },
    {
        "tag": "#U089R2QYL",
        "name": "Ace",
        "role": "elder",
        "lastSeen": "20230908T150957.000Z",
        "expLevel": 36,
        "trophies": 6602,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 12,
        "previousClanRank": 11,
        "donations": 142,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#PGR2CRYR",
        "name": "Rock Noveen",
        "role": "leader",
        "lastSeen": "20230908T180655.000Z",
        "expLevel": 47,
        "trophies": 6587,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 13,
        "previousClanRank": 12,
        "donations": 572,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#U9GJUPG89",
        "name": "Lenin alex",
        "role": "member",
        "lastSeen": "20230908T150744.000Z",
        "expLevel": 35,
        "trophies": 6564,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 14,
        "previousClanRank": 15,
        "donations": 564,
        "donationsReceived": 360,
        "clanChestPoints": 0
    },
    {
        "tag": "#2JCV8VY9",
        "name": "popstar",
        "role": "member",
        "lastSeen": "20230908T174551.000Z",
        "expLevel": 48,
        "trophies": 6556,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 15,
        "previousClanRank": 13,
        "donations": 513,
        "donationsReceived": 520,
        "clanChestPoints": 0
    },
    {
        "tag": "#9YVYR92C0",
        "name": "BørñGÄMËR7",
        "role": "member",
        "lastSeen": "20230908T180416.000Z",
        "expLevel": 39,
        "trophies": 6500,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 16,
        "previousClanRank": 17,
        "donations": 84,
        "donationsReceived": 72,
        "clanChestPoints": 0
    },
    {
        "tag": "#CU0GR8JQ9",
        "name": "killer",
        "role": "member",
        "lastSeen": "20230908T110054.000Z",
        "expLevel": 35,
        "trophies": 6500,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 17,
        "previousClanRank": 16,
        "donations": 244,
        "donationsReceived": 360,
        "clanChestPoints": 0
    },
    {
        "tag": "#CPGUU09C",
        "name": "Jashan",
        "role": "member",
        "lastSeen": "20230907T151225.000Z",
        "expLevel": 39,
        "trophies": 6500,
        "arena": {
            "id": 54000015,
            "name": "Arena 18"
        },
        "clanRank": 18,
        "previousClanRank": 18,
        "donations": 36,
        "donationsReceived": 80,
        "clanChestPoints": 0
    },
    {
        "tag": "#L8JPJRRP",
        "name": "PiratePanda Jeg",
        "role": "member",
        "lastSeen": "20230908T173226.000Z",
        "expLevel": 34,
        "trophies": 6417,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 19,
        "previousClanRank": 19,
        "donations": 281,
        "donationsReceived": 560,
        "clanChestPoints": 0
    },
    {
        "tag": "#82GRL2C8R",
        "name": "Nithish",
        "role": "member",
        "lastSeen": "20230908T111849.000Z",
        "expLevel": 36,
        "trophies": 6285,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 20,
        "previousClanRank": 21,
        "donations": 277,
        "donationsReceived": 240,
        "clanChestPoints": 0
    },
    {
        "tag": "#RYYJR9J2",
        "name": "Akash",
        "role": "member",
        "lastSeen": "20230908T175208.000Z",
        "expLevel": 41,
        "trophies": 6259,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 21,
        "previousClanRank": 20,
        "donations": 11,
        "donationsReceived": 560,
        "clanChestPoints": 0
    },
    {
        "tag": "#CCU0JCUJ",
        "name": "vrihen",
        "role": "member",
        "lastSeen": "20230908T175433.000Z",
        "expLevel": 35,
        "trophies": 6251,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 22,
        "previousClanRank": 22,
        "donations": 477,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#Q02QLCQ0Y",
        "name": "himu",
        "role": "member",
        "lastSeen": "20230908T142456.000Z",
        "expLevel": 34,
        "trophies": 6215,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 23,
        "previousClanRank": 24,
        "donations": 61,
        "donationsReceived": 80,
        "clanChestPoints": 0
    },
    {
        "tag": "#RRPCCY0UG",
        "name": "Nava",
        "role": "member",
        "lastSeen": "20230908T151649.000Z",
        "expLevel": 44,
        "trophies": 6135,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 24,
        "previousClanRank": 30,
        "donations": 699,
        "donationsReceived": 400,
        "clanChestPoints": 0
    },
    {
        "tag": "#YUJ8PGPVR",
        "name": "STRIKER",
        "role": "member",
        "lastSeen": "20230908T154143.000Z",
        "expLevel": 34,
        "trophies": 6112,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 25,
        "previousClanRank": 31,
        "donations": 89,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#QP99LUGUY",
        "name": "Jensen",
        "role": "member",
        "lastSeen": "20230908T144240.000Z",
        "expLevel": 38,
        "trophies": 6097,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 26,
        "previousClanRank": 25,
        "donations": 328,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#9GRR9YG2L",
        "name": "PARTH",
        "role": "member",
        "lastSeen": "20230908T172543.000Z",
        "expLevel": 40,
        "trophies": 6086,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 27,
        "previousClanRank": 28,
        "donations": 98,
        "donationsReceived": 480,
        "clanChestPoints": 0
    },
    {
        "tag": "#UVGQRP8RV",
        "name": "Stunner",
        "role": "member",
        "lastSeen": "20230908T164745.000Z",
        "expLevel": 36,
        "trophies": 6060,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 28,
        "previousClanRank": 27,
        "donations": 162,
        "donationsReceived": 520,
        "clanChestPoints": 0
    },
    {
        "tag": "#VY8V2CLPG",
        "name": "groku",
        "role": "member",
        "lastSeen": "20230908T164559.000Z",
        "expLevel": 36,
        "trophies": 6030,
        "arena": {
            "id": 54000014,
            "name": "Arena 17"
        },
        "clanRank": 29,
        "previousClanRank": 29,
        "donations": 100,
        "donationsReceived": 280,
        "clanChestPoints": 0
    },
    {
        "tag": "#V2GQ9LCCV",
        "name": "white devil VK",
        "role": "member",
        "lastSeen": "20230908T170130.000Z",
        "expLevel": 35,
        "trophies": 5940,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 30,
        "previousClanRank": 33,
        "donations": 24,
        "donationsReceived": 360,
        "clanChestPoints": 0
    },
    {
        "tag": "#R8L9RPRJ0",
        "name": "Troy",
        "role": "member",
        "lastSeen": "20230908T104718.000Z",
        "expLevel": 31,
        "trophies": 5853,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 31,
        "previousClanRank": 34,
        "donations": 0,
        "donationsReceived": 240,
        "clanChestPoints": 0
    },
    {
        "tag": "#VU92PYP8",
        "name": "D.vaniya",
        "role": "member",
        "lastSeen": "20230908T142546.000Z",
        "expLevel": 40,
        "trophies": 5823,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 32,
        "previousClanRank": 37,
        "donations": 0,
        "donationsReceived": 200,
        "clanChestPoints": 0
    },
    {
        "tag": "#CRJVYVV0G",
        "name": "SAI",
        "role": "member",
        "lastSeen": "20230908T171849.000Z",
        "expLevel": 34,
        "trophies": 5779,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 33,
        "previousClanRank": 36,
        "donations": 30,
        "donationsReceived": 0,
        "clanChestPoints": 0
    },
    {
        "tag": "#V2LV82Y2C",
        "name": "shield(GS)",
        "role": "member",
        "lastSeen": "20230908T103746.000Z",
        "expLevel": 32,
        "trophies": 5770,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 34,
        "previousClanRank": 39,
        "donations": 377,
        "donationsReceived": 360,
        "clanChestPoints": 0
    },
    {
        "tag": "#9L02GGR9L",
        "name": "DärkSpärrøw",
        "role": "member",
        "lastSeen": "20230908T173230.000Z",
        "expLevel": 32,
        "trophies": 5744,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 35,
        "previousClanRank": 42,
        "donations": 108,
        "donationsReceived": 200,
        "clanChestPoints": 0
    },
    {
        "tag": "#J8RJUJP20",
        "name": "TN. KATHIR..",
        "role": "member",
        "lastSeen": "20230908T103824.000Z",
        "expLevel": 35,
        "trophies": 5682,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 36,
        "previousClanRank": 43,
        "donations": 18,
        "donationsReceived": 160,
        "clanChestPoints": 0
    },
    {
        "tag": "#CPR809GVP",
        "name": "博文Golem♈ ♈fish",
        "role": "member",
        "lastSeen": "20230908T144548.000Z",
        "expLevel": 33,
        "trophies": 5528,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 37,
        "previousClanRank": 45,
        "donations": 18,
        "donationsReceived": 280,
        "clanChestPoints": 0
    },
    {
        "tag": "#UG20JYVUY",
        "name": "Deadeye",
        "role": "member",
        "lastSeen": "20230908T171830.000Z",
        "expLevel": 39,
        "trophies": 5500,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 38,
        "previousClanRank": 46,
        "donations": 16,
        "donationsReceived": 480,
        "clanChestPoints": 0
    },
    {
        "tag": "#U0UL0U8JV",
        "name": "yyyyy",
        "role": "member",
        "lastSeen": "20230908T144450.000Z",
        "expLevel": 31,
        "trophies": 5500,
        "arena": {
            "id": 54000013,
            "name": "Arena 16"
        },
        "clanRank": 39,
        "previousClanRank": 47,
        "donations": 931,
        "donationsReceived": 400,
        "clanChestPoints": 0
    }
]
const Players = (data) => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    return (
        <div className='container mx-auto'>
            <h2>This is Player data</h2>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {memberlist
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={column.id} align={column.align}>
                                                        {column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={memberlist.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default Players
