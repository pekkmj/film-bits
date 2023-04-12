const Model = require("./Model.js")

class imdbKey extends Model {
  static get tableName() {
    return "imdbKeys"
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["imdbKey"],
      properties: {
        imdbKey: { type: "string" }
      }
    }
  }
}

module.exports = imdbKey