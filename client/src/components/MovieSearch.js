import React, { useState } from "react";

const MovieButton = () => {
  const [movieInfo, setMovieInfo] = useState("")

  const onClick = () => {
    if(!movieInfo) {
      setMovieInfo(
        <img src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/268821/4556789/apiihy1mm__31528.1625622408.jpg" />
      )
    }
    else {
      setMovieInfo()
    }
  }

  return (
    <div>
      <button className="button" onClick={onClick}>Click me for a movie!</button>
      {movieInfo}
    </div>
  )
}

export default MovieButton