import React from 'react';
import InputArea from './InputArea/InputArea';
import DisplayList from './DisplayList/DisplayList';
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

    this.eventA = this.eventA.bind(this);
    this.handleItemAdd = this.handleItemAdd.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  eventA() {
    // var state = this.state;
    console.log('eventA');
    // I will remove the item here
    // this.setState(state);
  }

  handleItemAdd(e) {
    var state = this.state;
    state.list.push({ id: state.list.length, name: state.currentItem });
    this.setState(state);
  }

  handleTextChange(newText) {
    var state = this.state;
    state.currentItem = newText;
    this.setState(state);
  }

  render() {
    const input = this.state.currentItem;
    
    var evenMoreProps  = this.props;
    var evenMoreState = this.state;
    return (
      <div className="parent">
        <DisplayList list={this.state.list}  callUpwardsAgain={this.eventA}/>
        <InputArea text={input} onTextChanged={this.handleTextChange} onItemAdd={this.handleItemAdd} />
      </div>
    );
  }
};

export default App;

