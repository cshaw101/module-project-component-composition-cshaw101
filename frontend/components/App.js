import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
let [data, setData] = useState(null)

useEffect(() => {
axios.get('https://api.nasa.gov/planetary/apod?api_key=m6Xi96z1LeOaZibC7GlfKrqMa43YVuPfdjSHgvxp')
     .then((res) => {
      console.log(res.data)
      setData(res.data)
     })
     .catch((err) => {
      console.error(err)
     })
}, [])

  return (
    <p>
      Read through the instructions in the README.md file to build your NASA
      app! Have fun <span role="img" aria-label='go!'>🚀</span>!
    </p>
  )
}

export default App
