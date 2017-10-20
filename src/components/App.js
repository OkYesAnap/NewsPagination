import React, { Component } from "react";
import logo from "./logo.svg";
import Newsblock from "./newsblock";
import Search from "./search";
import Pagination from "./pagination";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      pagination: 0,
      page: 1,
      searchstr: "",
      content: [],
      loadedContent: []
    };
    this.searchfunc = this.searchfunc.bind(this);
    this.paginationChange = this.paginationChange.bind(this);
    this.pageChanger = this.pageChanger.bind(this);
  }
  loadData(data) {
    this.setState({ content: data, loadedContent: data });
  }
  componentDidMount() {
    fetch(
      "https://newsapi.org/v1/articles?source=the-next-web&apiKey=5476179b3d5b4a6db7ee287ad7b1685b"
    )
      .then(data => data.json())
      .then(data => this.loadData(data.articles));
  }
  searchfunc(e) {
    this.setState({
      content: this.state.loadedContent.filter(val =>
        val.title.includes(e.target.value)
      ),
      searchstr: e.target.value,
      page: 1
    });
  }
  pageChanger(e) {
    this.setState({ page: e.target.textContent });
  }
  paginationChange(e) {
    this.setState({ pagination: +e.target.value });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to News</h1>
        </header>
        <div>
          <Search searchfunc={this.searchfunc} />
          <Pagination paginationChange={this.paginationChange} />
        </div>
        {
          <Newsblock
            content={this.state.content}
            pagination={this.state.pagination}
            page={this.state.page}
            pageChanger={this.pageChanger}
          />
        }
      </div>
    );
  }
}

export default App;
