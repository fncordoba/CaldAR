const firebase = require('../firebase');

const authMiddleWare = (req, res, next) => {
  const { token } = req.headers;
  if (!token) return res.status(400).json({ message: 'provide a token' });
  return firebase.auth().verifyIdToken(token)
    .then(() => next())
    .catch((err) => res.status(401).json({ message: err }));
};

module.exports = authMiddleWare;
