import React, { Component } from 'react' 

export default class GifSearch extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.value)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className='search'>
                <label>Enter a Search Term:  
                 <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                </label>
            </form>
        )
    }
}