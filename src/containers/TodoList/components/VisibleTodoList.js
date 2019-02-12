import React, { Component } from 'react';



class VisibleTodoList extends Component {
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props.todos);
        let this_=this;
        return (
            <ul>
                {this.props.todos.map(function (el, index) {
                    return <li key={index} onClick={this_.props.toggleTodo.bind(this_,el.id)} style={el.complete?{textDecoration:"line-through"}:null}>{el.content}</li>
                })}
            </ul>
        );
    }
}

export default VisibleTodoList;
