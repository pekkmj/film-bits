import got from "got"
import dotenv from "dotenv"
dotenv.config();

const omdbApiKey = process.env.OMDB_API_KEY

class omdbClient {
  static async getMovie(id){
		try {
				const url = `http://www.omdbapi.com/?i=${id}&apikey=${omdbApiKey}`
				const apiResponse = got(url)
				console.log(apiResponse)
		}catch (error) {
      return { error: error.message };
    } 
	}
}

export default omdbClient