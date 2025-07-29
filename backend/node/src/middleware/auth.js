const jwt = require('jsonwebtoken');

module.exports = function (roles = []) {
  // roles param can be a single role string (e.g. 'admin') or an array of roles (e.g. ['admin', 'user'])
  if (typeof roles === 'string') {
    roles = [roles];
  }
  return [
    (req, res, next) => {
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];
      if (!token) return res.sendStatus(401);
      jwt.verify(token, process.env.JWT_SECRET || 'secret', (err, user) => {
        if (err) return res.sendStatus(403);
        if (roles.length && !roles.includes(user.role)) return res.sendStatus(403);
        req.user = user;
        next();
      });
    }
  ];
};
