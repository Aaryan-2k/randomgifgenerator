//we implement all the sate managment function and return them so that it can be used in component
import { useState,useEffect } from 'react';

const api_key=process.env.REACT_APP_GIPHY_API_KEY
export default function useGif(){
    const [isLoading, setLoading]=useState(false);
    const [gif, setGif]=useState('');
    const [tag, setTag]=useState('');
    const [title, setTitle]=useState('A RANDOM GIF');
    
    function changeHandler(event){
        setTag(event.target.value);
    }

    async function fetchData(tag=null){
        let url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
        setLoading(true)
        if(tag){
            setTitle(`A RANDOM ${tag} GIF`)
            url+=`&tag=${tag}`
            setTag('')
        }
        try{
            let data=await fetch(url);
            data=await data.json();
            setGif(data.data.images.downsized.url)
        }
        catch{
            console.log('error in fetching data from API');
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[]);
return {isLoading,gif,tag,title,changeHandler, fetchData}
}