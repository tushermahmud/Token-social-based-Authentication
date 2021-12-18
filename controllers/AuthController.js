const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { OAuth2Client } = require("google-auth-library");
var { body, check, validationResult } = require("express-validator");
const sgMail = require("@sendgrid/mail");
const bycrypt = require("bcrypt");
const gravatar = require("gravatar");
require("dotenv").config({
  path: "./config/config.env",
});
sgMail.setApiKey(process.env.MAIL_KEY);

const LoginController = async(req, res) => {
  const {email,password}=req.body;
  const errors = validationResult(req);
  console.log(errors.array());
  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  }
  try {
    let user = await UserModel.findOne({email:email});
    if(user){
      let matched = await bycrypt.compare(password,user.password);
          if (!matched) {
            return res.status(401).json({
              error: "The email or password is wrong!",
            });
          } else {
            //generate token
            const payload ={
              id:user._id
            }
            const token = jwt.sign(
              payload,
              "MYSECRETTOKEN",
              {
                expiresIn:'7d'
              },
              (err,token)=>{
                if(err){
                  return res.status(500).json({
                    error:"Invalid token"
                  })
                }else{
                  let {name, _id,email,role,avater,time,createdAt,mobile}=user;
                  let sendUser = {
                    name: name,
                    id: _id,
                    email: email,
                    role: role,
                    mobile: mobile,
                    avater: avater,
                    time: time,
                    createdAt: createdAt,
                  };
                  return res.status(200).json({
                    token: token,
                    user: sendUser,
                  });
                }
              }
            )
          }
    }else{
      return res.status(404).json({
        error:"User not found!"
      })
    }
  } catch (error) {
    return res.status(500).json({
      error:error.message
    })
  }

  
};

const RegisterController = async (req, res) => {
  const errors = validationResult(req);
  console.log(errors.array());
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()[0].msg,
    });
  }
  try {
    const { email, password, name, mobile } = req.body;
    let user = await UserModel.findOne({ email });
    if (user) {
      res.status(400).json({
        error: "user already exists",
      });
    } else {
      //setting the user data
      const avater = gravatar.url(email, {
        s: "",
        r: "",
        d: "",
      });
      bycrypt.hash(password, 11, async (err, hashedPassword) => {
        if (err) {
          res.json(err);
        }

        //preparing the payload for jwt
        const payload = {
          name: name,
          email: email,
          password: hashedPassword,
          mobile: mobile,
          avater: avater,
        };
        jwt.sign(
          payload,
          "MYSECRETTOKEN",
          { expiresIn: 36000 },
          (err, token) => {
            if (err)
              return res.json({
                error: err.message,
              });
            const emailData = {
              from: process.env.EMAIL_FROM,
              to: email,
              subject: "Account Activation Link",
              html: `<h4>Please click the activation to activate your account</h4><P>${process.env.CLIENT_URL}/users/activate/${token}</P></hr><p>This Email contains Sensitive Information. So, Please do not share with anyone</p>`,
            };
            console.log(emailData);
            sgMail
              .send(emailData)
              .then((sent) => {
                return res.json({
                  message: `email has been sent to ${email}`,
                });
              })
              .catch((e) => {
                return res.json({
                  error: e,
                });
              });
          }
        );
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

const activationController = async (req, res) => {

  try {
    const { token } = req.body;
    if (token) {
      jwt.verify(token, "MYSECRETTOKEN", async (err, decode) => {
        console.log("Activation error");

        if (err) {
          return res.json({
            error: "Token Expired.Please sign up again",
          });
        } else {
          const { name, email, mobile, password, avater } = jwt.decode(token);
          const user = new UserModel({
            name,
            email,
            mobile,
            password,
            avater,
          });
          await user.save((err, userData) => {
            if (err) {
              return res.status(500).json({
                error: err.message,
              });
            } else {
              return res.json({
                success: true,
                user: userData,
                message: "Signup success",
              });
            }
          });
        }
      });
    } else {
      return res.status(500).json({
        error: "Error Happening. Please try again",
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error,
    });
  }
};

module.exports = {
  LoginController,
  activationController,
  RegisterController,
};
