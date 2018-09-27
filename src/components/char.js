import React from 'react';
import {BarChart, Bar, ResponsiveContainer, YAxis, CartesianGrid, Tooltip} from 'recharts';
import CustomTooltip from './CustomTooltip';

export default class Char extends React.Component {

  render() {
    const {data, dataKey} = this.props;
    var dataSelect = data.map(item => {
      item[dataKey] = item[dataKey] ? parseFloat(item[dataKey]) : 0;
      return item;
    }).sort((a, b) => { return b[dataKey] - a[dataKey] });

    return (
      <ResponsiveContainer width="100%" height={350}>
        <BarChart width={100} height={300} data={dataSelect}
        margin={{top: 20, right: 0, left: dataKey === 'mc' ? 55 : 0, bottom: 20}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <YAxis/>
          <Tooltip content={<CustomTooltip/>} data={dataSelect}/>
          <Bar dataKey={dataKey} fill="#FF694C" />
        </BarChart>
      </ResponsiveContainer>
    )
  }

}
