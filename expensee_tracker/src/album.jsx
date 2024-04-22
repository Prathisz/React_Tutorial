import React, { useEffect, useState } from 'react'

function Album() {
    const [album,setalbum]=useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res=>(res.json())) 
        // .then((data)=>console.log(data))
        .then((d)=>setalbum(d))
        
        .catch(err=>console.log(err)) 
        
    },[])
  return (
    <div>
      <h1>Data From JsonPlaceholder</h1>
      {/* <ul>{album.map(item=>(
        <li>{item.title}</li>
      ))}</ul> */}
      
        {album.map(item=>(
            <img src={item.thumbnailUrl} alt="" />
        ))}
        <>
        {/* {album.map(it=>(
         <p>{it.title}</p>
        ))} */}
      </>
    </div>
  )
}

export default Album
