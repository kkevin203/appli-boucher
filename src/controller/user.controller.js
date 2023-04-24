import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const { User } = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.signup = async (req, res) => {
  const i_user = req.body;
  const { password } = req.body;

  const passCrypt = bcrypt.hash(password, 8);
  try {
    const o_user = new User({ ...i_user, password: passCrypt });
    o_user.save();
    return res.send('OKAY');
  } catch (error) {
    console.log(error);
  }
};

module.exports.signin = async (req, res) => {
  const { password, email } = req.body;

  const i_user = await User.findOne({ email });
  const passMatch = bcrypt.compare(password, i_user.password);
  if (i_user && passMatch) {
    const payload = {
      name: i_user.name,
      email: i_user.email,
      id: i_user._id,
    };
    const token = jwt.sign(payload, 'PAS SECRET', { expiresIn: '24h' });

    return res.send({ token });
  }
};
module.exports.updUser = async (req, res) => {
  const id_user = req.params.id_user;
  const i_user = req.body;
  const passCrypt = await bcrypt.hash(i_user?.password, 8);

  Object.assign(i_user, { password: passCrypt });
  User.findByIdAndUpdate(id_user, { $set: { i_user } }, { new: truc }).then(
    (u) => {
      return res.send({ u });
    }
  );
};
