import React from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar/>
        <VideoList/>
        <VideoPlayer/>
      </header>
    </div>
  );
}

export default App;
