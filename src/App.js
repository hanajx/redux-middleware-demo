import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import logo from './logo.svg';
import * as actionCreator from './store/actions/actions';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age Up</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className="App-logo" alt=""/>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    loading: state.loading
  }
};

const mapDispatchToProps = dispatch => {
  // return {
  //   onAgeUp: () => dispatch({type: "AGE_UP", value: 1}),
  //   onAgeDown: () => dispatch({type: "AGE_DOWN", value: 1})
  // };
  return {
    onAgeUp: () => {dispatch(actionCreator.ageUp(1))},
    onAgeDown: () => {dispatch(actionCreator.ageDown(1))}
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
