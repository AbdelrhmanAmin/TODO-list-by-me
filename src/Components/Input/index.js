import React , { Component } from 'react';

class Input extends Component {
    state = {
        currentValue: ''
    }
    onChange = (e) => {
        const {value} = e.target;
        this.setState( () =>{
           return {currentValue: value}
        })
    }
    onEnter = (e) => {
        const {value} = e.target;
        if(e.key === 'Enter'){
            if(value === ''){
                alert('PLEASE ENTER A VALUE')   
                }else{
                    this.props.add(this.state.currentValue);
                    this.setState(() => {
                    return { currentValue: '' }
                    })
                }
        }
    }
    render(){
        return(
            <div>
                <input type="text" onChange={this.onChange} value={this.state.currentValue} autoFocus={true} onKeyPress={this.onEnter} />
            </div>
        )
    }
}
export default Input;