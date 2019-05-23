const router = require('express').Router();
const User = require('../models/User');
const { loginValidation } = require('../validation');

router.post('/login', async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const login = await User.findOne({ login: req.body.login });
  if (!login) return res.status(400).send('Login does not exist');

  const validPassword = await User.findOne({ password: req.body.password });
  if (!validPassword) return res.status(400).send('invalid password');

  res.send('Logged in');
});

module.exports = router;
