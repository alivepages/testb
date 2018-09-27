import React from 'react';

export default class CustomTooltip extends React.Component {

  render() {
    var n = parseInt(this.props.label, 0);
    var item = this.props.data[n];
    var list = [];
    for (var property in item) {
      list.push({
        property: property,
        value: item[property]
      })
    }
    return (
      <dl>
      {list.map((item, key) => {
        return (
          <React.Fragment key={key}>
            <dt>{item.property}</dt>
            <dd>{item.value}</dd>
          </React.Fragment>
        )
      })}
      </dl>
    )
  }

}
