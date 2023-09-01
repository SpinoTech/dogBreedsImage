import React, { useContext, useEffect, useState } from 'react'
import "./imgCard.css"
import Context from '../context/CreateContext';

export default function ImgCard({loc , imageDetails}) {
  const context=useContext(Context);
  const {likedDog , setLikedDog}=context;
  const [liked,setLiked]=useState(loc==='fev');
  // console.log(liked)

  const resultantArrayAfterDislike=(Dislike)=>{
    return likedDog.filter(dogs=>dogs!=Dislike)
  }
  // console.log(likedDog)

  const likedToggle=()=>{
    setLiked(!liked);
    if(liked===false)setLikedDog([...likedDog , imageDetails]);
    else setLikedDog(resultantArrayAfterDislike(imageDetails))
  }
  return (
    <div className={loc==="fev"?"fevCard":"card"}>
      {imageDetails&&<img src={imageDetails} alt=""/>}
      <span onClick={likedToggle} id={liked?'red':'white'}>&#10084;</span>
    </div>
  )
}
