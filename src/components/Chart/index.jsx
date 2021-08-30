import React from 'react'
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from 'recharts';

import scOption from '../../util/cssOptions';
import { ChartContainer } from './styles';

export default function Chart({ title, data, grid }) {

 return (
  <ChartContainer>
   <h3 className="chartTitle">{title}</h3>
   <ResponsiveContainer width="100%" aspect={8 / 1}>
    <LineChart data={data} >
     <XAxis dataKey="name" stroke={scOption.mainOrange} />
     <YAxis />
     <Line type="monotone" dataKey="SLP" stroke="#8884d8" activeDot={{ r: 6 }} />
     <Line type="monotone" dataKey="meta" stroke="#82ca9d" />
     <Tooltip />
     {grid && <CartesianGrid stroke={scOption.txtColor} strokeDasharray="5 5" />}
    </LineChart>
   </ResponsiveContainer>
  </ChartContainer>
 )
}

