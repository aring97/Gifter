import React, {useState} from 'react';
import Post from './Post';
export const Search=()=>{
    const[posts, setPosts]=useState([]);
    const searchSubmit=()=>{
    const search=document.getElementById('search').value;
    
    fetch(`/api/Post/search?q=${search}`)
    .then(res=>res.json())
    .then(data=>setPosts(data))
    .then(()=>{
        const PostContainer=document.getElementsByClassName("cards-column")
        console.log(PostContainer)
        const HTMLText=posts.map((post) => (
            <Post key={post.id} post={post} />
          ))
        PostContainer.innerHTML=HTMLText.forEach()
    }
    )
}

    return(
        <fieldset>
            <input type="test" id='search'></input>
            <br/>
            <input type="button" onClick={searchSubmit} value="Submit"></input>
        </fieldset>
    )
}