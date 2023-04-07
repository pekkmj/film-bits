import got from "got"
import dotenv from "dotenv"
dotenv.config();

const omdbApiKey = process.env.OMDB_API_KEY

class omdbClient {
  static async getMovie(id){
		try {
				const url = `http://www.omdbapi.com/?i=${id}&apikey=${omdbApiKey}`
				console.log(url)
				const apiResponse = await got(url)
				const responseBody = apiResponse.body
				return responseBody
		} catch (error) {
      return { error: error.message };
    } 
	}
}

export default omdbClient