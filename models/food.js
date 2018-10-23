var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var foodSchema = new Schema({
    // id: Number,
    name: String,
    author: String,
    authorName:String,
    imageShow: String,
    type: Number,
    time: String,
    sets: Number,
    level: String,
    rating: Number,
    rateNum: Number,
    material: [{
        matName: String,
        matQuantum: String
    }],
    cook: [{
        image: String,
        note: String
    }],
    listRate: [String]
  }
);
var foodModel = mongoose.model("Food", foodSchema);

module.exports = foodModel;
