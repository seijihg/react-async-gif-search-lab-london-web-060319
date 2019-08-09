import React from 'react'

import NavBar from './NavBar'
import GifList from './GifList'

// the App component should render out the GifListContainer component 

const App = () => {
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
        <GifList />
    </div>
  )
}

export default App
