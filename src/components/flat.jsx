import React, { Component } from 'react';

class Flat extends Component {
  render() {
    return (
     <div className={ `card ${this.props.selectedFlat? "active" : "" }` } onClick={ () => this.props.handleClick(this.props.flat)} sytle={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${this.props.flat.imageUrl}')`}}>
     <div className="card-category">{this.props.flat.price}{this.props.flat.priceCurrency}</div>
     <div className="card-description">
        <h2>{this.props.flat.name}</h2>
      </div>
    </div>
    )
  }
}

export default Flat;
