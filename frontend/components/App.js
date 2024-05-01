import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Image from './Image'
import Body from './Body'
import Footer from './Footer'

function App() {
let [data, setData] = useState(null)
let [photo, setPhoto] = useState(null)

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=m6Xi96z1LeOaZibC7GlfKrqMa43YVuPfdjSHgvxp')
     .then((res) => {
      setData(res.data)
      setPhoto(res.data.hdurl)
      console.log(res.data)
     })
     .catch((err) => {
      console.error(err)
     })
}, [])

  return (
    <>
    <Image imageData={photo} />
   <Body bodyData={data?.explanation} />
    <Footer footerData={data?.date} />
    </>
  )
}

export default App
