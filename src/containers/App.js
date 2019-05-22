import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { compose } from "redux";
import { fetchData } from "../actions/App.actions";
import "./App.css";
import Tables from "./Tables";
import Header from "./Header";


class App extends React.PureComponent {
  componentWillMount() {
    this.props.fetchData("https://jsonplaceholder.typicode.com/posts");
  }
  menuChange = (menu) => {
      let link = '';
      switch(menu) {
        case 'posts': link = 'https://jsonplaceholder.typicode.com/posts'; break;
        case 'todos': link = 'https://jsonplaceholder.typicode.com/todos'; break;
        case 'comments': link = 'https://jsonplaceholder.typicode.com/comments'; break;
        default : link = 'https://jsonplaceholder.typicode.com/posts'; break;
      }
    this.props.fetchData(link);
  }
  render() {
    const jsonData = this.props.jsonData;
    const source = this.props.source;
    return (
      <div>
        <Header source={source} menuChange={this.menuChange} />
        <Tables jsonData={jsonData}/>
      </div>
    );
  }
}
App.propTypes = {
  jsonData: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  fetchData: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    jsonData: state.AppReducer.tableData,
    source: state.AppReducer.source,
  }
}
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchData: link => dispatch(fetchData(link))
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(App);
