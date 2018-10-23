var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Food = require('./food');

var userSchema = new Schema({
    idFb: String,
    avaFb: String,
    nameFb: String,
    emailFb: String,
    ratePoint: Number,
    rateNum: Number,
    listSub: [String],
    listFavorite: [{type: Schema.Types.ObjectId, ref: 'Food'}] // list of id (ref)
  }
);

var userModel = mongoose.model("User", userSchema);

module.exports = userModel;
