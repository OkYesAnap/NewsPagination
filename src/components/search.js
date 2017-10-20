import React, { Component } from "react";

class Search extends Component {
  render() {
    let { searchfunc } = this.props;
    return (
      <div>
        Search <input type="text" onChange={searchfunc} />
      </div>
    );
  }
}

export default Search;
