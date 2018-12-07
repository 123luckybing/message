import React, { Component } from 'react';
import BikeSearch from '../BikeSearch';
import BikeMapDetail from '../BikeMapDetail';
class BikeMap extends Component {
  render() {
    return (
      <div>
        <BikeSearch />
        <BikeMapDetail />
      </div>
    );
  }
}
export default BikeMap;
