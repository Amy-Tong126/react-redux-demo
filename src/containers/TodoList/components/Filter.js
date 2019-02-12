import React,{ Component } from 'react';

class Filter extends Component{
    render(){
        console.log(this.props.onClick)
        return(
            <div>
                show:
                <button onClick={this.props.setFilter.bind(this,"SHOW_ALL")}>all</button>
                <button onClick={this.props.setFilter.bind(this,"SHOW_COMPLETED")}>completed</button>
                <button onClick={this.props.setFilter.bind(this,"SHOW_ACTIVE")}>active</button>
            </div>
        )
    }
}

export default Filter;