import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        { id: 0, description: "Laundry" },
        { id: 1, description: "Groceries" }
      ],
      input: "Shopping"
    };

    this.addItem = this.addItem.bind(this);
    this.appRemoveItem = this.appRemoveItem.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  addItem() {
    var state = this.state;
    state.list.push({ id: state.list.length, description: state.input });
    this.setState(state);
  }

  appRemoveItem(index) {
    var state = this.state;
    state.list.splice(index, 1);
    this.setState(state);
  }

  textChanged(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    var todoElements = this.state.list.map(
      (elem, idx) => (<TodoListItem key={idx} index={idx}
        value={elem.description}
        propRemoveItem={this.appRemoveItem} />)
    );
    return (
      <div className="container">
        <div className="item-input">
          <input type="text" value={this.state.input} onChange={this.textChanged} />
          <input type="button" value="Add item" onClick={this.addItem} />
        </div>
        <div className="todo-list">{todoElements}</div>
      </div>
    );
  }
};

export default App;

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
  }

  onClickClose() {
    var index = parseInt(this.props.index);
    this.props.propRemoveItem(index);
  }

  render() {
    return (<div>{this.props.value} <button type="button" onClick={this.onClickClose}>&times;</button></div>);
  }
}
