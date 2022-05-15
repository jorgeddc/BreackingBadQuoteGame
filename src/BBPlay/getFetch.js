




export const getFetch = async(url, setnote, setcharacter) => 
{
   const resp = await fetch(url);
    const data = await resp.json();
 
   data.map(element=>{
           setnote(element.quote);
       setcharacter(element.author)
       console.log(element.author)
   })
    
    
}

export const GetFetchCharacter = async(character,setcharacterurl) => 
{
    
   const column = document.querySelector(".uno");
    const resp = await fetch('https://www.breakingbadapi.com/api/characters');
    const data = await resp.json();
  
   const random= Math.floor(Math.random() * (4 - 1)) + 1;
  
    data.map(element => {
             if (character==='Jimmy McGill')
                         {character='Saul Goodman'
                         
                        }
                       if(character==='Kim Wexler')
                          {character='Kimberly Wexler'}  
                    else if (character==='Chuck McGill')
                             {character='Charles McGill'}
                        else if (character==='Hank Schrader')
                                     {character='Henry Schrader'}
                            else if  (character==='Gus Fring')
                                {character='Gustavo Fring'}
                               
                               else if( element.name === character){
                                   setcharacterurl(element.img)
                                   console.log(random)
                                   column.style.gridColumn=random; }

                                
        
    })


   
}

export const getFetchImgRandom = async(imgrandom,setimgrandom) => 
{
    
    
    const resp = await fetch(imgrandom);
    const data = await resp.json();
    data.map(element=>{

        setimgrandom(element.img)
    })
    
    
}

export const getFetchImgRandomdos = async(imgrandomdos,setimgrandomdos) => 
{
    
    
    const resp = await fetch(imgrandomdos);
    const data = await resp.json();
    data.map(element=>{

        setimgrandomdos(element.img)
    })
    
   
  
    
}


