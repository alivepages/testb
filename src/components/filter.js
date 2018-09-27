import React from 'react';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(event) {
    var value = this.refs.selector.value;
    this.props.handleChange(value);
  }

  render() {
    return (
      <div className = "form-group mt-5">
        <label htmlFor="selector">Selecciona un indicador: </label>
         <select id="selector" className = "ml-1" ref="selector" onChange={this._handleChange}>
         {this.props.filters.map((item, key) => {
           return <option key = {key}> {item} </option>
         })}
         </select>
      </div>
    )
  }

}
