import React,  { useState , useEffect } from 'react';
import Search from '../components/search';
import axios from "axios";
import Pictures from '../components/pictures';


const Homepage = () => {

  const [pictures ,setPictures]=useState(null);
  const[input, setInput]=useState("");
  const [page, setPage]=useState(1);

  const auth="RpE9d5fIXaZWlAHiJYsK50xlmfjgOJOqWvzOulkyPyakLKhg5d5dJrZ9";
  const initalUrl='https://api.pexels.com/v1/curated?page=2&per_page=15';
  const searchUrl=`https://api.pexels.com/v1/search?query=${input}&per_page=15&page=2`;


  const search= async (url)=>{
    let result= await axios.get(url,{
        headers:{
        Authorization:auth,}
    });
    setPictures(result.data.photos);                       
};

 useEffect(()=>{
  search(initalUrl);
 },[input]);


 const morePicture = async ()=>{
  let newUrl;
  setPage(page +1)
  if(input===""){
    newUrl =`https://api.pexels.com/v1/curated?page=${page}&per_page=15`;
  } else if(input) {
    newUrl =`https://api.pexels.com/v1/search?query=${input}&per_page=15&page=${page}`;
  }
  let result= await axios.get(newUrl,{
    headers:{
    Authorization:auth,}
    });
  setPictures(pictures.concat(result.data.photos));    
 };


  return (
    <div style={{minHeight:"100vh"}}>
      <Search search={()=>{search(searchUrl)}} setInput={setInput}/>
      <div className='collection'>
        {pictures &&
        pictures.map((p, key="id")=> {
          return <Pictures picture={p}/>
        })}
      </div>
      <div className="morePicture">
        <button onClick={morePicture}>More Pictures</button>
      </div>
    </div>
  )
}

export default Homepage;
