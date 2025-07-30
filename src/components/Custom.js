//import { useState,useEffect } from 'react';
import useGif from '../hooks/useGif'
const api_key=process.env.REACT_APP_GIPHY_API_KEY
export default function Custom(){
    const{isLoading,gif,tag,title,changeHandler,fetchData}=useGif();
    //const [isLoading, setLoading]=useState(false);
    //const [gif, setGif]=useState('');
    //const [tag, setTag]=useState('');
    //const [title, setTitle]=useState('A RANDOM GIF');
    // function changeHandler(event){
    //     setTag(event.target.value);
    // }
    // async function fetchData(tag=null){
    //     let url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    //     setLoading(true)
    //     if(tag){
    //         setTitle(`A RANDOM ${tag} GIF`)
    //         url+=`&tag=${tag}`
    //         setTag('')
    //     }
    //     try{
    //         let data=await fetch(url);
    //         data=await data.json();
    //         setGif(data.data.images.downsized.url)
    //     }
    //     catch{
    //         console.log('error in fetching data from API');
    //     }
    //     setLoading(false)
    // }

    // useEffect(()=>{
    //     fetchData();
    // },[]);

    return (
        <div className='custom'>
            <h2>{title}</h2>
            {
            isLoading ? 
            (<div><div className='loader'></div></div>) :
            (<img src={gif} width='450'></img>)
            }
            <input onChange={changeHandler} value={tag} placeholder='Search specific Random GIF...'></input><br/>
            <button onClick={()=>fetchData(tag)}>Generate</button>
        </div>
    )
}