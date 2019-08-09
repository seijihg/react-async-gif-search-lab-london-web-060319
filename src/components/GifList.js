import React from 'react'
import GifSearch from './GifSearch'

class GifList extends React.Component {
    state = {
        gif: []
    }

    getData = (data = "template") => {
        return fetch(`http://api.giphy.com/v1/gifs/search?q=${data}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
    }

    componentDidMount() {
        this.getData()
        .then(gifs => {
            this.setState({
                gif: gifs.data.slice(0, 3)
            })
        })
    }
    mapImage = () => {
        return this.state.gif.map(elem => {
                return (
                    <div>
                        <ul>
                        <li><img src={elem.images.original.url} key={elem.id}></img></li>
                        </ul>
                    </div>
                )
        })
    }

    searchHandler = (event) => {
        event.preventDefault()
        const query = event.target.site_search.value
        this.getData(query)
        .then(gifs => {
            this.setState({
                gif: gifs.data.slice(0, 3)
            })
        })
    }

    render() {
        return(
        <div>
            <GifSearch searchHandler={this.searchHandler}/>
            {this.mapImage()}
        </div>
        )
    }
}

export default GifList