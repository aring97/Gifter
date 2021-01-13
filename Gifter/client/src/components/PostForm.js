import React from 'react';

export const PostForm=()=>{
    const formSubmit=()=>{
        const title=document.getElementById("title").value
        const image=document.getElementById("image").value
        const caption=document.getElementById("caption").value
        const postObj={
            "title":title,
            "imageUrl":image,
            "caption":caption,
            "userProfileId":1
        }
        console.log(postObj)
        fetch("/api/Post",{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(postObj)
        })
        .then(resp=>resp.json())
    }
      return (
          <fieldset>
              <p>Title</p>
              <p>*required</p>
              <input type="text" id="title" required/>
              <p>Image URL</p>
              <p>*required</p>
              <input type="text" id="image" required/>
              <p>Caption</p>
              <input type="text" id="caption"/>
              <br/>
              <input type="button" onClick={formSubmit} value="Submit"/>
          </fieldset>
          
      )
}