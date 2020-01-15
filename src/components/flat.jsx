import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
     <div className="card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url(;);">
     <div className="card-category">{this.props.flat.price}{this.props.flat.priceCurrency}</div>
     <div className="card-description">
        <h2>{this.props.flat.name}</h2>
      </div>
    </div>
    )
  }
}

export default Flat;
