import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const Chart = ({ coinHistory, coinName, currentPrice }) => {

  const coinPrice = [];
  const coinTimeStap = [];

  for(let i = 0; i < coinHistory?.history?.length; i++) {
    coinPrice.push(coinHistory.history[i].price);
    coinTimeStap.push(new Date(coinHistory.history[i].timestamp).toLocaleDateString());
  };

  const data = [
    {name: 'January', Total: 1200},
    {name: 'February', Total: 2100},
    {name: 'March', Total: 800},
    {name: 'April', Total: 1600},
    {name: 'May', Total: 900},
    {name: 'June', Total: 1700},
  ];



  return (
    <>
      <div className='flex space_between'>
        <h3>{coinName} Price Chart</h3>
        <div>
          <span>{coinHistory?.change}%</span>
          Current {coinName} Pirce: $ {currentPrice}
        </div>
      </div>
      {/* <ResponsiveContainer width="800px" height="800px">
        <AreaChart
          width={500}
          height={400}
          data={data}
          >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip className='tooltip' />
          <Area className='area' type="monotone" dataKey="Total" stroke="#8884d8" fill="#241e3c" fillOpacity='.9'/>
        </AreaChart>
      </ResponsiveContainer> */}
    </>
  )
}

export default Chart;