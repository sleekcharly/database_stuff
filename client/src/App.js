import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  state = {
    cars: []
  }

  componentDidMount(){
    this.getCars();
  }

  getCars(){
    axios.get('/api/getcars')
      .then( response => {
        this.setState({cars: response.data })
      })
  }

  onCarSubmit = () => {
    axios.post('/api/addcar', {
      brand: 'Ford',
      model: 'Focus',
      year: 2018,
      avail: true
    })
    .then(response => {
      console.log(response.data)
      this.getCars();
    })
  }

  onCarRemove = () => {
    axios.post('/api/removecar', {
      brand: 'Ford'
    })
    .then( response => {
      this.getCars()
    })
  }

  onCarUpdate = () => {
    axios.post('/api/updatecar', {
      id:'5e52db1f6033f50c704a8974',
      brand: 'Ferrari'
    })
    .then(response => {
      this.getCars();
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Add car</h1>
        <button onClick={() => this.onCarSubmit()}>
          Add car to db
        </button>
        <hr/>
        { this.state.cars.map((car, i) => (
          <div key={i}> - { car.brand } </div>
        ))
        }

        <hr/>
        <h1>Remove car</h1>
        <button onClick={() => this.onCarRemove()}>
          REMOVE CAR
        </button>

        <hr/>
        <h1>Update car</h1>
        <button onClick={() => this.onCarUpdate()}>
          UPDATE CAR
        </button>
      </div>
    );
  }

}

export default App;
