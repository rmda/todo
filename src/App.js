import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 0, name: "Laundry" },
        { id: 1, name: "Groceries" }
      ],
      currentItem: "Shopping"
    };
    
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }


  handleItemAdd(e) {
    var state = this.state;
    state.list.push({ id: state.list.length, name: state.currentItem });
    this.setState(state);
  }

  handleTextChange(newText) {
    // This is probably the most simple example how to update state and trigger a render event. Except
    // we don't trigger render of our parent component, we only trigger the onChange for our textbox. 
    // Exciting, isn't it?

    // Pull current state
    var state = this.state;
    state.currentItem = newText; // Assign value to newly created state
    // Then push new state via setState
    this.setState(state);
  }

  render() {
    const input = this.state.currentItem; // notice const
    return (
      <div className="parent">
        <DisplayList list={this.state.list} />
        <InputArea text={input} onTextChanged={this.handleTextChange} onItemAdd={this.handleItemAdd} />
      </div>
    );
  }
};

export default App;

function DisplayItem(props) {
  return <li>{props.item.name}</li>;
}

function DisplayList(props) {
  return <div className="list"><ul> {props.list.map(elem => <DisplayItem item={elem} key={elem.id} />)} </ul></div>;
}

class InputArea extends React.Component {
  constructor(props) {
    super(props);
     this.handleClick = this.handleClick.bind(this);
     this.handleChange = this.handleChange.bind(this);
  }

    // lifting the state up
  handleClick(e) {
    this.props.onItemAdd(e.target.value);
  }

  handleChange(e) {
    this.props.onTextChanged(e.target.value);
  }

  render() {
    var currentItem = this.props.text;
    return (
      <div className="add-item">
        <h3>Add something to do:</h3>
        <input type="text" value={currentItem} onChange={this.handleChange} />
        <input type="button" value="Add to list" onClick={this.handleClick} />
      </div>
    );
  }
}
