import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      controlledDate: null,
      value: '',
    };
  }

  handleDateChange = (event, date) => {
    this.setState({
      controlledDate: date,
    }, ()=>{
      console.log(this.state.controlledDate);
    });
  };

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
    console.log(event.target.value);
  }

  render() {
    return (
      <div className="App">
      <h1>
        Megasavings Bus Tickets
      </h1>
        <TextField
          id="start"
          hintText = "Start"
          onChange={this.handleChange}
        />
        <TextField
          id="destination"
          hintText = "Destination"
          onChange={this.handleChange}
        />
        <br/>
        <TextField
          id="numOfPassengers"
          hintText = "# of Passengers"
          onChange={this.handleChange}
        />
        <DatePicker
        hintText="Date"
        value={this.state.controlledDate}
        onChange={this.handleDateChange}
      />
         <RaisedButton label="Search"/>
      </div>
    );
  }
}

export default App;
