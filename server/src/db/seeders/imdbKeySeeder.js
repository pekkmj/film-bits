import { imdbKey } from "../../models/index.js";

class imdbKeySeeder {
  static async seed() {
    for (let i = 34583; i <= 99999; i++){
      console.log(`tt00${i}`)
      await imdbKey.query().insert({ imdbKey: `tt00${i}` })
    }

    for (let i = 0; i <= 999999; i++) {
      console.log(`tt0${i}`)
      await imdbKey.query().insert({ imdbKey: `tt0${i}` })
    }

    for (let i = 0; i<= 9916764; i++) {
      console.log(`tt${i}`)
      await imdbKey.query().insert({ imdbKey: `tt${i}` })
    }
  }
}

export default imdbKeySeeder