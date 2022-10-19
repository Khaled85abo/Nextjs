import { ComposedChart, Line, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";
import { scaleOrdinal } from "d3-scale";
import { schemeCategory10 } from "d3-scale-chromatic";

const colors = scaleOrdinal(schemeCategory10).range();
const designColors = ['#B0BDC6', '#D1DAE0']
const data = [
    {
        name: "Jan",
        uv: 7000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Mar",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "Apr",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Jun",
        uv: 12390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "Jul",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Aug",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Sep",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Oct",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Nov",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Dec",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3
        } 
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width
        }, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
    let { fill, x, y, width, height } = props;
    console.log('fill', fill, 'x', x, 'y', y, 'width', width, 'height', height)
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};
const RoundedDiv = () => {
    return <div style={{ height: '150px', width: '30px', background: 'linear-gradient(180deg, #B0BDC6 0%, #D1DAE0 100%)', borderRadius: '8px 8px 0 0 ' }}></div>

}

export default function App() {
    return (
        <>
            <ComposedChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                    dataKey="uv"
                    fill="#8884d8"
                    shape={<TriangleBar />}
                //label={{ position: "top" }}
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={designColors[1 % 20]} />
                    ))}
                </Bar>
                <Line type="monotone" dataKey="uv" stroke="#ff7300" />
            </ComposedChart>
            <div style={{ height: '150px', width: '20px', background: 'linear-gradient(180deg, #B0BDC6 0%, #D1DAE0 100%)', borderRadius: '8px 8px 0 0 ' }}></div>
        </>
    );
}
