import React, { Component } from "react";

class Newsblock extends Component {
  updt(data) {
    let { pagination, page, pageChanger } = this.props;
    this.content = data.map((val, i, arr) => {
      if (
        (page * pagination - pagination <= i && page * pagination > i) ||
        !pagination
      )
        return (
          <div className="oneBlock">
            <img className="imgDiv" src={val.urlToImage} />
            <p>Author: {val.author}</p>
            <p>
              <a href={val.url}>{val.title}</a>
            </p>
            <p>{val.description}</p>
          </div>
        );
    });
    if (pagination) {
      let pg = data.length / pagination;
      for (let page = 0; pg > 1 && page < pg; page++) {
        this.content.push(<li onClick={pageChanger}>{page + 1}</li>);
      }
    }
  }
  render() {
    const { content } = this.props;
    this.updt(content);
    return <div className="allBlocks">{this.content}</div>;
  }
}

export default Newsblock;
