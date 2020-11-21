const mongoose = require('mongoose');

const ArtistSchema = new mongoose.Schema({
   name: {
       type: String,
       required: true,
       minlength: 2,
   },
   email: {
       type: String,
       required: true,
       unique: true,
   },
   whatsapp: {
       type: String,
       required: true,
   },
   description: {
       type: String,
       required: false,
       maxlength: 150,
   },
   genres: {
       type: [String],
       required: true,
   },
   portfolio: {
       type: [String],
       required: false,
   },
   userId: {
       type: Number,
       required: true,
       unique: true,
   },
   avatar: {
       type: String,
       required: false,
   }
});

module.exports = mongoose.model('Artist', ArtistSchema);