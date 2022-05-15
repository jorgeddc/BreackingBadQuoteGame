import React, { useEffect, useState } from 'react'
import {getFetch, GetFetchCharacter, getFetchImgRandom,getFetchImgRandomdos} from './getFetch'
import BB from "../img/BB.png"
import { useLoading } from '../hooks/useLoading'
import './index.css'


export const ShowBBplay = () => {
  
    const [note,setnote] = useState(null) ;
    const [character, setcharacter] = useState('');
    const [url, seturl] = useState('https://www.breakingbadapi.com/api/quote/random');
    const [characterurl,setcharacterurl]= useState('')
    const [imgrandom, setimgrandom] = useState('https://www.breakingbadapi.com/api/character/random');
    const [imgrandomdos, setimgrandomdos] = useState('https://www.breakingbadapi.com/api/character/random');
   
 useEffect(()=>{
        getFetch(url,setnote,setcharacter)
       },[])
       useEffect(()=>{
         GetFetchCharacter(character,setcharacterurl);
        },[character])
  useEffect(()=>{  
      getFetchImgRandom (imgrandom,setimgrandom);
      getFetchImgRandomdos (imgrandom,setimgrandomdos);
},[])

const handleIncorrect = ()=>{
  alert(`NOOOO!!!`)
  
     document.querySelector('.dos').style.display ='none'
 }
   
const handleIncorrect2 = ()=>{
  alert(`NOOOO!!!`)

   document.querySelector('.tres').style.display ='none'
}
 const handleCorrect = () =>{
     console.log('correct')
     alert(`He was ${character}...  FUCK YEAH!!`);
     
    
     window.location.reload(true);
   

 }

 const {loading} = useLoading()
   return (
     <div className="container-play">
        <div className="container_head">
     <img src={BB} alt="" />

        <h1>guess who's the date</h1>
       
        
        <hr/></div> 
     
      

         
        {
          
          
          loading ? ( <div className="loading">...Loading</div> ): 
        
     
    
   (  <> <p className='note'>{note}</p></>
        
    
    )
    }
        <div className="container">
      <div className="images-to-select">
      <img onClick ={handleCorrect} 
      className='uno animate__animated animate__rubberBand'src={characterurl} alt=""/>
    <img onClick={handleIncorrect} 
    className='character-no dos  animate__animated animate__rubberBand'src={imgrandom} alt=""/>
     <img onClick={handleIncorrect2} 
     className='character-no tres animate__animated animate__rubberBand' src={imgrandomdos} alt=""/>
     </div>
 
     </div>
    
    
</div>
    )
}
