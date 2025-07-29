
// Mongoose model for User records
const mongoose = require('mongoose');


/**
 * UserSchema defines the structure for user accounts:
 * - username: unique username
 * - password: hashed password
 * - role: user role (e.g., admin, user)
 */
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String
});

module.exports = mongoose.model('User', UserSchema);
