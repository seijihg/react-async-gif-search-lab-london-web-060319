import React from 'react'

const GifSearch = ({searchHandler}) => {
        return (
            <div>
                <form onSubmit={(event) => searchHandler(event)}>
                <label for="site_search">Search the Giff:</label>
                <input type="search" id="site_search" ></input>

                <button>Search</button>
                </form>
            </div>
        )
}

export default GifSearch