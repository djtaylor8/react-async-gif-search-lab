import React, { Component } from 'react' 
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

export default class GifListContainer extends Component {
    state={
        gifs: []
    }

findGifs(search) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g&limit=3`)
    .then(res => res.json())
    .then(({data}) => this.setState({
        gifs: data.map( gif => ({ url: gif.images.original.url }))
    }))
}

handleSubmit = (search) => {
    this.findGifs(search)
}

componentDidMount() {
    this.findGifs()
}

    render() {
        return (
        <div>
        <GifList gifs={this.state.gifs} />
        <GifSearch  submitHandler={this.handleSubmit}/>
        </div>
        )
    }
}