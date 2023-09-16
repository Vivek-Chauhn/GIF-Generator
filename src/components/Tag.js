import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';


const API_KEY = process.env.REACT_APP_GIPHY_API_KEY

const Tag = () => {
  const [tag, setTag] = useState("car");
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState('false')

  async function fetchData() {
    setLoading(true)
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const { data } = await axios.get(url)
    const imageSource = data.data.images.downsized_large.url
    setGif(imageSource)
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  function clickHandle() {
    fetchData();
  }
  function changeHandler(e) {
    setTag(e.target.value)
  }

  return (
    <div className='bg-blue-300 w-[45%]  mt-[10px] gap-y-5 rounded-lg border border-black  flex flex-col items-center'>
      <h1 className='text-xl mt-[10px] font-bold uppercase underline'> A Random {tag} gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} width="350" />)
      }

      <input
        className='w-9/12 rounded-lg py-2 text-lg mb-[2px] text-center'
        onChange={changeHandler}
        value={tag}
      />



      <button onClick={clickHandle}
        className='w-9/12 bg-slate-500 rounded-lg py-2 text-lg mb-[20px] '
      >
        Generate
      </button>

    </div>
  )
}

export default Tag

