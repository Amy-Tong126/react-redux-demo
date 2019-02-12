import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props){
        super(props);
        this.state={
            content:""
        }
    }
    changeValue(e){
        this.setState({
            content:e.target.value
        })
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.content} onChange={this.changeValue.bind(this)}/>
                <button onClick={this.props.addTodo.bind(this,this.state.content)}>add</button>
            </div>
        );
    }
}

export default AddTodo;
