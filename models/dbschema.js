
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
userName: {type: string, required: true, minlength: 5, maxlength: 100, trim: true},

email: {type: string, required: true,unique: true, minlength: 5, maxlength: 40, trim: true },

password: {type: string, minlength: 5, maxlength: 40, required: true, trim: true }
  
});

const User = mongoose.dbschema("User", userSchema);
module.exports = User 