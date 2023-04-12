/* eslint-disable no-console */
import { connection } from "../boot.js"
import imdbKeySeeder from "./seeders/imdbKeySeeder.js"

class Seeder {
  static async seed() {
    console.log("seeding imdb keys")
    await imdbKeySeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder