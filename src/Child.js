import React,{useState,useEffect} from 'react'
import './Child.css'
function Child() {
  const[posts,setPosts]=useState([])

useState(()=>{
          fetch("https://jsonplaceholder.typicode.com/comments")
          .then((res)=>res.json())
          // .then((res)=>console.log(res))
          .then((res)=> setPosts(res))
})

  return (
    <div>
      <div className="child">
        <table className="table">
          <thead>
        <th>postId</th>
        <th>id</th>
        <th>name</th>
        <th>email</th>
        <th>body</th>
          </thead>
          <tbody>
        {posts.map((info)=>
         <tr key={info.id}>
         <td>{info.id}</td>
         <td>{info.name}</td>
         <td>{info.email}</td>
         <td>{info.body}</td>
       </tr>
        )}
       
          </tbody>
        </table>
      </div>
  
    </div>
  )
}

export default Child