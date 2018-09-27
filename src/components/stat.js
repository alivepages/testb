import React from 'react';
const math = require('mathjs');

export default class Stat extends React.Component {

  render() {
    const {data, dataKey} = this.props;
    var dataList = data.map(item => {
      var s = item[dataKey] ? parseFloat(item[dataKey]) : 0;
      return s;
    });
    var fixed = dataKey === 'mc' ? 0 : 2;
    return (
        <dl className="calculationBar">
          <dt>Promedio</dt>
          <dd>{math.mean(dataList).toFixed(fixed)}</dd>
          <dt>Máximo</dt>
          <dd>{math.max(dataList)}</dd>
          <dt>Mínimo</dt>
          <dd>{math.min(dataList)}</dd>
          <dt className="text-nowrap">Desv. Est.</dt>
          <dd>{math.std(dataList).toFixed(fixed)}</dd>
        </dl>
    )
  }

}
