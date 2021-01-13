import React from "react";
import "./App.css";
import PostList from "./components/PostList";
import {PostForm} from "./components/PostForm";
import {Search} from "./components/Search"
function App() {
  return (
    <div className="App">
      <PostForm/>
      <Search/>
      <PostList />
    </div>
  );
}

export default App;