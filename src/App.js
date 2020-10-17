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
      input: "Shopping"
    };

    this.addItem = this.addItem.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  addItem(e) {
    var state = this.state;
    state.list.push({ id: state.list.length, name: state.input });
    this.setState(state);
  }

  textChanged(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div className="parent">
        <TodoList items={this.state.list} />
        <div className="add-item">
          <h3>Add something to do:</h3>
          <input type="text" value={this.state.input} onChange={this.textChanged} />
          <input type="button" value="Add to list" onClick={this.addItem} />
        </div>
      </div>
    );
  }
};

export default App;

function TodoList(props) {
  return (<div className="list">
    <ul>
      {props.items.map(
        elem => <li key={elem.id}>{elem.name}</li>
      )}
    </ul>
  </div>);
}