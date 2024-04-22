import React, { useEffect, useState } from "react";

function Album() {
  const [album, setalbum] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      // .then((data)=>console.log(data))
      .then((d) => setalbum(d))

      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>Data From JsonPlaceholder</h1>
      {/* <ul>{album.map(item=>(
        <li>{item.title}</li>
      ))}</ul> */}
<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      {album.map((item) => (
        <div style={{ width: "30%", marginBottom: "20px" }}>
        <p>{item.title}</p>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <img src={item.thumbnailUrl}  style={{ width: "100px", height: "100px", marginLeft: "10px" }}  />
        </div>
        </div>

      ))}
      </div>
      <>
        {/* {album.map(it=>(
         <p>{it.title}</p>
        ))} */}
      </>
    </div>
  );
}

export default Album;
