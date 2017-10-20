import React, { Component } from "react";

class Pagination extends Component {
  render() {
    let { paginationChange } = this.props;
    return (
      <select onChange={paginationChange}>
        <option value="0">All</option>
        <option value="3">3</option>
        <option value="6">6</option>
      </select>
    );
  }
}

export default Pagination;
