import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function Meme() {

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        })) 
    }

  return (
    <main>
        <div className='form'>
            <input 
            type="text"
            className='form--input'
            placeholder='Top Text' 
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            />

            <input
             type="text" 
             className='form--input'
             placeholder='Bottom Text'
             name="bottomText"
             value={meme.bottomText}
             onChange={handleChange}
             />

            <button onClick={getMemeImage} className='form--button'>Get a new meme image</button>

        </div>

        <div className='meme'>
          <img src={meme.randomImage} alt="Car Image" className='meme--image' />
          <h2 className='meme--text top'>{meme.topText}</h2>
         <h2 className='meme--text bottom'>{meme.bottomText}</h2>
        </div>
    </main>
  )
}


