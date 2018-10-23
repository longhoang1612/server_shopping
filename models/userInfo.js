var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var newsfeed = require('./newsfeed');
var userInfoSchema = new Schema({
    // id: Number,

    idFb: String,
    avatar: String,
    numFollow: Number,
    userFollow:[{
        idFb: String,
        name: String,
        avatar: String,
    }],
    fullname: String,
    listNews: [{
        idPost: String,
        datePost: {
            type: Date,
            default: Date.now
        }
    }],
    date: {
        type: Date,
        default: Date.now
    },
  }
);
var userModel = mongoose.model("userModel", userInfoSchema);

module.exports = userModel;
