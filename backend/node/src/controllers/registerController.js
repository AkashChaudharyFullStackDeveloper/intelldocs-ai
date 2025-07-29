
// Controller for handling user registration
const User = require('../models/User');
const bcrypt = require('bcryptjs');


/**
 * Register a new user in the system.
 * Expects: username, password, role in req.body
 * Password is hashed before saving.
 */
exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    // Validate required fields
    if (!username || !password || !role) return res.status(400).json({ message: 'Missing fields' });
    // Check if user already exists
    const existing = await User.findOne({ username });
    if (existing) return res.status(409).json({ message: 'User already exists' });
    // Hash the password
    const hash = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hash, role });
    await user.save();
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
};
