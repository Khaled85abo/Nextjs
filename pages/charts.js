import React, { PropTypes } from 'react'
import { ResponsiveContainer, Cell, BarChart, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ComposedChart } from 'recharts'
const data = [
    {
        "name": "Page A",
        "uv": 4000,
        "pv": 2400,
        'budget': 3000,
        'average': 3500
    },
    {
        "name": "Page B",
        "uv": 3000,
        "pv": 1398,
        'budget': 3000,
        'average': 3500
    },
    {
        "name": "Page C",
        "uv": 2000,
        "pv": 9800,
        'budget': 4000,
        'average': 3500
    },
    {
        "name": "Page D",
        "uv": 2780,
        "pv": 3908,
        'budget': 4000,
        'average': 3500
    },
    {
        "name": "Page E",
        "uv": 1890,
        "pv": 4800,
        'budget': 5000,
        'average': 3500
    },
    {
        "name": "Page F",
        "uv": 2390,
        "pv": 3800,
        'budget': 4000,
        'average': 3500
    },
    {
        "name": "Page G",
        "uv": 3490,
        "pv": 4300,
        'budget': 3000,
        'average': 3500
    }
]
const datab = [
    {
        name: 'Page A',
        uv: 590,
        pv: 800,
        amt: 1400,
    },
    {
        name: 'Page B',
        uv: 868,
        pv: 967,
        amt: 1506,
    },
    {
        name: 'Page C',
        uv: 1397,
        pv: 1098,
        amt: 989,
    },
    {
        name: 'Page D',
        uv: 1480,
        pv: 1200,
        amt: 1228,
    },
    {
        name: 'Page E',
        uv: 1520,
        pv: 1108,
        amt: 1100,
    },
    {
        name: 'Page F',
        uv: 1400,
        pv: 680,
        amt: 1700,
    },
];




const chart = () => {
    return (
        <>
            {/* <BarChart width={730} height={250} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart> */}

            {/* <LineChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart> */}
            <ComposedChart width={730} height={250} data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip /> */}
                {/* <Legend /> */}
                <Bar dataKey="uv" fill="#8884d8" />
                <Line type="monotone" dataKey="budget" stroke="#E0BB75" />
                <Line type="monotone" dataKey="average" stroke="#487D5D" />
            </ComposedChart>
            <div style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                    <ComposedChart
                        width={500}
                        height={400}
                        data={datab}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis dataKey="name" scale="band" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
                        <Bar dataKey="pv" barSize={30} fill="#413ea0" />
                        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </>
    )
}

export default chart