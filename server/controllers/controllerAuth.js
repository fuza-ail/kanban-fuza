const { User } = require('../models');
const jwt = require('jsonwebtoken');
const { hashPassword, checkPassword } = require('../helpers/bcrypt');
require('dotenv').config();
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

class ControllerAuth {

  // LOGIN
  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email
      }
    })
      .then(user => {
        if (user) {
          if (checkPassword(req.body.password, user.password)) {
            const token = jwt.sign({
              UserId: user.id,
              UserEmail: user.email
            }, process.env.TOKEN_KEY)
            res.status(200).json({
              access_token: token,
              email: user.email
            })
          } else {
            throw {
              status: 400,
              message: 'Wrong password'
            }
          }
        } else {
          throw {
            status: 400,
            message: 'Email not found'
          }
        }
      })
      .catch(err => {
        next(err)
      })
  }

  // REGISTER
  static register(req, res, next) {
    const dataUser = {
      email: req.body.email,
      password: hashPassword(req.body.password)
    }
    User.create(dataUser)
      .then(user => {
        res.status(200).json(user)
      })
      .catch(err => {
        console.log(err)
        next(err)
      })
  }

  // GOOGLE LOGIN
  static loginGoogle(req, res, next) {
    const token = req.body.token;
    let userData = {}
    client.verifyIdToken({
      idToken: token,
      audience: process.env.CLIENT_ID
    })
      .then(data => {
        const payload = data.getPayload();
        userData.email = payload.email;
        userData.password = hashPassword(process.env.DEFAULT_PASS)
        return User.findOne({ where: { email: payload.email } })
      })
      .then(user => {
        if (user) {
          return user
        } else {
          return User.create(userData)
        }
      })
      .then(theUser=>{
        const token = jwt.sign({
          UserEmail: theUser.email,
          UserId :theUser.id
        },process.env.TOKEN_KEY);
        res.status(200).json({
          access_token: token,
          email: theUser.email
        })
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = ControllerAuth;