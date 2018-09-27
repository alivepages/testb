import React, { Component } from 'react';
import Char from '../components/char';
import data from '../data/data';
import Filter from '../components/filter';
import { Grid, Row, Col, Button, Collapse } from "react-bootstrap";
import Stat from '../components/stat';

export default class NYSEChar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selector: 'mc',
        statOpen: false
      };
      this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(value) {
    this.setState({
      selector : value
    });
  }

  render() {
console.log('joel',this.state.statOpen);
    return (
      <main className="mt-5">
        <Grid>
          <Row>
            <Col sm={12}>
              <Filter filters = {['mc', 'eps', 'beta', 'pe', 'change']} handleChange = {this._handleChange}/>
            </Col>
          </Row>
          <Row>
            <Collapse in={this.state.statOpen}>
              <Col lg={3} md={5} sm={12}>
                <Stat data = {data.Trades} dataKey = {this.state.selector}/>
              </Col>
            </Collapse>
            <Col lg={this.state.statOpen ? 9 : 12} md={this.state.statOpen ? 7 : 12} sm={12}>
              <Char data = {data.Trades} dataKey = {this.state.selector}/>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button className="btn btn-primary" onClick={() => this.setState({ statOpen: !this.state.statOpen })}>
                {this.state.statOpen ? "Ocultar Estadísticas" : "Ver Estadísticas"}
              </Button>
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}
