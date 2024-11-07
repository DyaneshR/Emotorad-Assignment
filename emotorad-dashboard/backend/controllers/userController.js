// userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res) => {
  const { googleId, name, email, avatar } = req.body;
  let user = await User.findOne({ googleId });
  if (!user) {
    user = new User({ googleId, name, email, avatar });
    await user.save();
  }
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.json({ token });
};
