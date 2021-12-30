import React from 'react';
import ButtonComponent from './ButtonComponent';
import '../App.css';
import PostList from './PostList';
import SelectedPost from './SelectedPost';

function App() {
  return (
    <div className="App">
     <h2>Supun</h2>
     <ButtonComponent/>
    <br>
    </br>
    <PostList/>
    <br></br>
    <SelectedPost/>
    </div>
    
  );
}

export default App;
