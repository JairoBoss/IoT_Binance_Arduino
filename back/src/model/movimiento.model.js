var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var CompraSchema = new Schema({
  usuario: {
    type: String,
  },
  moneda: {
    type: String,
  },
  tipo: {
    type: String,
  },
  cantidad: {
    type: String,
  },
});

module.exports = mongoose.model("Compra", CompraSchema);
