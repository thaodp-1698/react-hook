import './App.css';
import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    async function fetchPostList() {
      try {
        const requestUrl = 'http://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();

        const {data} = responseJSON;
        setPostList(data);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchPostList();
  }, [])

  return (
    <div className="app">
      <h1>Post list</h1>
      <PostList  posts={postList} />
    </div>
  );
}

export default App;
