import express from "express";

import omdbClient from "../../../../apiClient/omdb.js";

const omdbRouter = new express.Router()

omdbRouter.get("/movie", async (req, res)=>{
  try {
    const movieResponse = await omdbClient.getMovie("tt0848228")
    const movieData = JSON.parse(movieResponse)
    return res
      .set({ "Content-Type": "application/json" })
      .status(200)
      .json({movie: movieData})
  } catch (error) {
    return res.status(401).json({ errors: error })
  }
})

export default omdbRouter