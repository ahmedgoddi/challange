import logo from './logo.svg';
import './App.css';
import React , {useState} from "react"
import {connect} from 'react-redux'
import {inc , dec} from "./js/actions/Index"

function App(props) {
  
  return (
    <div className="App">
      <button  onClick={() => props.decrement(5)} >-</button>
  <span>{props.counter}</span>
      <button onClick={() => props.increment(5)} >+</button>
    </div>
  );
}

const mapStateToProps = (state) => {
return {
  counter : state.count
}
}

const mapDispatchToProps = (dispatch) =>{
return {
  increment : (payLode) => dispatch(inc(payLode)),
  decrement : (payLode) => dispatch(dec(payLode)),
}
}

export default connect(mapStateToProps , mapDispatchToProps)(App);
