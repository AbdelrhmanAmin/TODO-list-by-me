import React , { Component } from 'react';
import './style.css';

class List extends Component {
    render(){
        return(
            <div>
                <ol>
                {
                    this.props.todos.map(( {value , ts}) => 
                    <li key={ts}>
                    <span><kbd>{value}</kbd> <button className="btn btn-danger" onClick={ e => this.props.remove(ts) }>X</button></span>
                    <div>
                        
                    </div>
                    </li>
                )}
                </ol>
            </div>
        )
    }
}
export default List;