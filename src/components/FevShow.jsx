import React, { useContext } from 'react'
import "./fevShow.css"
import ImgCard from './ImgCard'
import Context from '../context/CreateContext';

export default function FevShow() {
  const context=useContext(Context);
  const {likedDog}=context;
  return (
    <div className='fevShow'>
      {
        likedDog&&likedDog.map((img , key)=>{
          return <ImgCard loc="fev" imageDetails={img} key={img}/>
        })
      }
    </div>
  )
}
