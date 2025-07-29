
// Controller for handling user authentication (login)
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
// Dummy users for demo; replace with real DB queries
const users = [
  { id: 1, username: 'admin', password: bcrypt.hashSync('admin123', 8), role: 'admin' },
  { id: 2, username: 'user', password: bcrypt.hashSync('user123', 8), role: 'user' }
];


/**
 * Authenticate user and return JWT token if credentials are valid.
 * Expects: username, password in req.body
 * Uses dummy users array for demo; replace with DB queries in production.
 */
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Find user by username
  const user = users.find(u => u.username === username);
  // Check password
  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  // Generate JWT token
  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  res.json({ token, role: user.role });
};
