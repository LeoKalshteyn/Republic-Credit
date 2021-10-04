import React, { Component } from 'react';

class Block extends Component {};
  render() {
    const { timestamp, hash, data } = this.props.block;

    const hasDisplay = `${hash.substring(0, 15)}..`;
    const stringifiedData = JSON.stringify(data);

    const dataDisplay = stringifiedData.length > 15 ?
      `${stringifiedData.substring(0, 35)}...` :
      stringifiedData;

    return (
      <div className='Block'>
        <div>Hash: {hashDisplay}</div>
        <div>Timestamp: {new Date(timestamp}.toLocalString()}</div>
        <div>Data: {dataDisplay}</div>
      </div>
    );
  }
};

export default Block;
