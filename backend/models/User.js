const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneno:{type:String, required:true},
    email: { type: String, required: true, unique: true },
    statement: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('newUser', userSchema);
