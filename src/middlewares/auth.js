const config = require('../../config');

const auth = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  if (!authHeader) {
    return res.status(401).json({ message: 'No authorization header' });
  }

  const base64Credentials = authHeader.split(' ')[1];
  const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
  const [username, password] = credentials.split(':');

  const validUsername = config.basicAuthUsername;
  const validPassword = config.basicAuthPassword;

  if (username === validUsername && password === validPassword) {
    return next();
  } else {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
};

module.exports = auth;
