import React, { Component } from "react";
import TodoItems from "./comp/TodoItems/TodoItems";
import AddItem from "./comp/AddItem/AddItem";


class App extends Component {
  state = {
    items: [
      {id:1, name:"Hagar", age:21},
      {id:2, name:"Yara", age:20},
      {id:3, name:"Gamelaa", age:19},
      {id:4, name:"Nour", age:22},
    ] 
  }

  deleteItem = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    });
    this.setState({items})
  }
  AddItem = (item) => {
    item.id = Math.state.items;
    let items = this.state.items;
    items.push(item);
    this.setState({items})
  }

  render(){
  return (
    <>
    <div className="App container">
      <h1 className="text-center">To do List App</h1>
      <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      <AddItem AddItem={this.AddItem} />
    </div>
    </>
  );
}
}


export default App;
