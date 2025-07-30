import { useState,useEffect } from 'react';
const api_key=process.env.REACT_APP_GIPHY_API_KEY

export default function Random(){

    const [isLoading, setLoading]=useState(false);
    const [gif, setGif]=useState('');

    async function fetchData(tag=null){
        let url=`https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
        setLoading(true)
        if(tag){
            url+=`&tag=${tag}`
        }
        try{
            let data=await fetch(url);
            data=await data.json()
            setGif(data.data.images.downsized.url)
        }
        catch{
            console.log('error in fetching data from API');
            setGif("");
        }
        setLoading(false)
    }

    useEffect(()=>{
        fetchData();
    },[]);

    return (
        <div className='random'>
            <h2>A RANDOM GIF</h2>
            {
            isLoading ? 
            (<div><div className='loader'></div></div>) :
            (<img src={gif} width='450'></img>)
            }
            <button onClick={fetchData}>Generate</button>
        </div>
    )
}