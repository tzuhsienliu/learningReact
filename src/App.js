import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  // constructor(props){
  //   super(props);
  //   console.log(this.props)
  //   // this.state = this.props.something;
  // }

  constructor(){
    super();
    console.log("App - Constructor")
  }

  componentDidMount() {
    //Ajax Call movies
    //this.setState({movies });
    console.log("App - Mounted")
  }
  
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter};
    counters[index].value++;
    this.setState({counters});
  }
  
  // the class the has the object (in this case id) handles the event, the other class calls the event/function
  // through props, which passes the function to the other component.
  handleDelete = (counterId) => {
    console.log("event handler called",counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({counters}) 
  };
  
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  render() { 
    console.log("App - Rendered")
    return (
      <React.Fragment>
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length}  />
        <main className="container">
          <Counters
            counters ={this.state.counters} 
            onReset={this.handleReset} 
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement} 
          />
        </main>
      </React.Fragment>
    );
  }
}


 
export default App ;