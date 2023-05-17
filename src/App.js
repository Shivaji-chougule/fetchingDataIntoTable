import React,{useEffect,useState} from "react";

import './Table.css'
export default function App() {
const[posts,setPosts] = useState([])

useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>res.json())
        //  .then((res)=>console.log(res))
         .then((res)=> setPosts(res))
},[])

  
  return (
    <div>
      <h1></h1>
      <table className="table">
        <tr>
      <th> ID</th>
      <th> TITLE</th>
      <th>USER ID</th>
      <th>BODY</th>
        </tr>
        
      {posts.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.userId}</td>
              <td>{item.body}</td>
             
            </tr>
          ))}
      </table>
    </div>
  );
}


