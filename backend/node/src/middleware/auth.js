
// Middleware for JWT authentication and role-based access control
const jwt = require('jsonwebtoken');


/**
 * Middleware to authenticate JWT and check user roles.
 * @param {string|string[]} roles - Allowed roles (e.g., 'admin' or ['admin', 'user'])
 * Usage: app.use(auth(['admin']))
 */
module.exports = function (roles = []) {
  // roles param can be a single role string (e.g. 'admin') or an array of roles (e.g. ['admin', 'user'])
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return [
    (req, res, next) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) return res.sendStatus(401); // No token provided
      jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) return res.sendStatus(403); // Invalid token
        if (roles.length && !roles.includes(user.role)) return res.sendStatus(403); // Role not allowed
        req.user = user;
        next();
      });
    }
  ];
};
