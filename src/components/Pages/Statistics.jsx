import { ProductContext } from "../Home/Home";
import React, { PureComponent , useContext} from 'react';
import {
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts'

const Statistics = () => {
const products = useContext(ProductContext)

document.title="Statistics | Gadget Heaven"

 
  return (
    <div style={{ width: '100%', height: 500 }}>
    <ResponsiveContainer>
      <ComposedChart
        width={500}
        height={400}
        data={products}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="title" scale="band" />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="price" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="price" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="price" stroke="#ff7300" />
      </ComposedChart>
    </ResponsiveContainer>
  </div>
  );
};

export default Statistics;




