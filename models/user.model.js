const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
					name: String,
					email: String,
					telephone: String,
					category: String,
					password: String,
					secCode: String,
					country: String,
					website: String,
					avatarName: String,
					terms: String
				}, {
    				timestamps: true
				});

module.exports = mongoose.model('User', UserSchema);