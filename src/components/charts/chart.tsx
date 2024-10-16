import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    visitors: 10,
    // pv: 2400,
    // amt: 2400,
  },
  {
    name: 'Feb',
    visitors: 10,
    // pv: 1398,
    // amt: 2210,
  },
  {
    name: 'Mar',
    visitors: 10,
    // pv: 9800,
    // amt: 2290,
  },
  {
    name: 'Apr',
    visitors: 17,
    // pv: 3908,
    // amt: 2000,
  },
  {
    name: 'May',
    visitors: 27,
    // pv: 4800,
    // amt: 2181,
  },
  {
    name: 'Jun',
    visitors: 23,
    // pv: 3800,
    // amt: 2500,
  },
  {
    name: 'Jul',
    visitors: 26,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: 'Aug',
    visitors: 30,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: 'Sep',
    visitors: 30,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: 'Oct',
    visitors: 30,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: 'Nov',
    visitors: 30,
    // pv: 4300,
    // amt: 2100,
  },
  {
    name: 'Dec',
    visitors: 30,
    // pv: 4300,
    // amt: 2100,
  },
];

export default class VisitorsChart extends PureComponent {
  
  render() {
    return (
        <div style={{ width: '100%', height: '250px' }}>
            <ResponsiveContainer > 
        <AreaChart
        //   width={520}
       //   height={300}
          data={data}
          margin={{
            top: 60,
            right: 30,
             left: 30,
             bottom: 10,
          }}
        >
             
          <CartesianGrid  vertical={false} strokeOpacity={0.3} height={100}    />
          <XAxis dataKey="name" strokeOpacity={0.1} />
          {/* <YAxis /> */}
           <Tooltip />
            <Area type="monotone" dataKey="visitors" stroke="#00567A" strokeWidth={2} fill="#EEF2FF" />
               
        </AreaChart>
        </ResponsiveContainer> 
    
      </div>
    );
  }
}
