import React from 'react';

class InputArea extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

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

export default InputArea;
