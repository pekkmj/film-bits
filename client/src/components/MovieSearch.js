import React, { useState, useEffect } from "react";

const MovieButton = () => {
  const [movieInfo, setMovieInfo] = useState("")
  const [displayInfo, setDisplayInfo] = useState("")

  const fetchMovie = async () =>{
    try {
      const response = await fetch(`/api/v1/movie`)
      const body = await response.json()
      setMovieInfo(body.movie)
    } catch (error) {
      console.error(`Error in fetch: ${error.message}`)
    }
  }

  useEffect(()=>{
    fetchMovie()
  }, [])

  const onClick = () => {
    if(!displayInfo) {
      setDisplayInfo(
        <div>
          <h1>{movieInfo.Title}</h1>
        </div>
      )
    }
    else {
      setDisplayInfo("")
    }
  }

  return (
    <div>
      <button className="button" onClick={onClick}>Click me for a movie!</button>
      {displayInfo}
    </div>
  )
}

export default MovieButton