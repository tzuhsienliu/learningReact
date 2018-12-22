import React, { Component } from "react";

class Counter extends Component {
  //state = {
    //value: this.props.counter.value,
    //tags: ["tag1", "tag2", "tag3"]
    // imageUrl = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
  //};

  // constructor(){
  //   super();
  //   //console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // styles = {
  //   fontSize: 25,
  //   fontWeight: "bold"
  // };

  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps:", prevProps);
    console.log("prevState:", prevState);
    if(prevProps.counter.value !== this.props.counter.value){
      //make AJAX call and get new data from the server
    }
  }

  componentWillUnmount(){
    console.log("Counter- Unmount");
  }

  render() {
    console.log("Counter-Render")
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt=""/> */}
        {/* {this.props.children} */}
        {/* <h4>Counter #{this.props.counter.id}</h4> */}
        <span style={{ fontSize: 15 }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>

        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>

        {/* {this.state.tags.length === 0 && "please ceate a new tag!"}
        {this.renderTags()} */}
      </div>
    );
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags!</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}> {tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  // handleIncrement = product => { //arrow functions inherits 'this' form the class
  //   console.log("Increment Clicked", product);
  //   this.setState({value: this.state.value + 1});
  // }

  
  // doHandleIncrement = () => {
  //   this.handleIncrement({id: 1});
  // }

}

export default Counter;
