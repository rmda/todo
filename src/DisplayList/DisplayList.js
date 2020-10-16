import React from 'react';

class DisplayList extends React.Component {
    constructor(props) {
        super(props);
        
    this.eventB = this.eventB.bind(this);
    }

    eventB() {
        console.log('eventB');
        this.props.callUpwardsAgain();
    }

    render() {
        
        var someProps = this.props;
        var someState = this.state;

        return (
            <div className="list">
                <ul>
                    {this.props.list.map(
                        elem => <DisplayItem item={elem} key={elem.id} callUpwards={this.eventB}/>
                        )}
                </ul>
            </div>);
    }
}

export default DisplayList;

class  DisplayItem extends React.Component {
    constructor(props) {
        super(props);
    
        this.eventC = this.eventC.bind(this); 
    }

    /** Example of how it works in a real clunky way.
     * eventC DisplayList.js:44
     * eventB DisplayList.js:11
     * eventA App.js:25
     * 
     * 
     * If I'm understanding it right this can be done better where its just EventC -> EventA
     */

    // Old
    // anotherEvent() {
    //     console.log('anotherEvent');
    // }
    
    // New
    eventC() {
        console.log('eventC');
        this.props.callUpwards(); // Can I skip this part and just go above?
        // Not yet, this alone causes an error, but if I modified B's prop..
        // this.props.callUpwardsAgain();
    }

    render() { 
        
        var moreProps  = this.props;
        var moreState = this.state;
        return (<li onClick={this.eventC}>{this.props.item.name}</li>);
    }
}
 
// export default DisplayItem;