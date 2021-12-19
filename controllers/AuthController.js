const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const _ = require("lodash");
const { OAuth2Client } = require("google-auth-library");
var { body, check, validationResult } = require("express-validator");
const sgMail = require("@sendgrid/mail");
const bycrypt = require("bcrypt");
const gravatar = require("gravatar");
const nodemailer = require('nodemailer')
require("dotenv").config({
  path: "./config/config.env",
});

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASSWORD,
  },
});


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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
            transporter.sendMail(emailData,(err,data)=>{
              if (err) {
                return res.json({
                  error: err.message,
                });
              }
              return res.json({
                  message: `email has been sent to ${email}`,
                });            
              })
            //  sgMail
            //   .send(emailData)
            //   .then((sent) => {
            //     return res.json({
            //       message: `email has been sent to ${email}`,
            //     });
            //   })
            //   .catch((e) => {
            //     return res.json({
            //       error: e,
            //     });
            //   });
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


const forgetPasswordController = async(req,res)=>{
  const { email } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      error: errors.array()[0].msg,
    });
  } else {
    try {
      let user =await UserModel.findOne({email:email})
      if(!user){
        return res.status(404).json({
          error:"User doesn't Exist"
        })
      }
      const token = jwt.sign(
            {
              _id: user._id,
            },
            "RESETPASSWORD",
            {
              expiresIn: "3d",
            }
      );
      let result = await UserModel.updateOne({ _id: user._id}, { $set: { resetPasswordLink: token}});
      if(result){
        const emailData = {
          from: process.env.EMAIL_FROM,
          to: email,
          subject: `Password Reset link`,
          html: `
                        <h1>Please use the following link to reset your password</h1>
                        <p>${process.env.CLIENT_URL}/users/password/reset/${token}</p>
                        <hr />
                        <p>This email may contain sensetive information</p>
                        <p>${process.env.CLIENT_URL}</p>
                    `,
        };
        // sgMail
        //       .send(emailData)
        //       .then((sent) => {
        //         console.log('SIGNUP EMAIL SENT', sent)
        //         return res.json({
        //           message: `Email has been sent to ${email}. Follow the instruction to activate your account`,
        //         });
        //       })
        //       .catch((err) => {
        //         console.log('SIGNUP EMAIL SENT ERROR', err)
        //         return res.json({
        //           message: err.message,
        //         });
        //       });
        transporter.sendMail(emailData, (err, data) => {
          if (err) {
            return res.json({
              error: err.message,
            });
          }
          return res.json({
            message: `email has been sent to ${email}`,
          });
        });
      }
      
    } catch (error) {
      res.status(500).json({
        error:error.message
      })
    }
  }
}

const resetPassword=async(req,res)=>{
  console.log(req.body.resetPasswordLink);
  const {resetPasswordLink,newPassword} = req.body;
  try {
    if (resetPasswordLink) {
      jwt.verify(resetPasswordLink, "RESETPASSWORD", async (err, decode) => {
        if (err) {
          return res.status(500).json({
            error: err.message,
          });
        }
        let user = await UserModel.findOne({
          resetPasswordLink: resetPasswordLink,
        });
        if (!user) {
          return res.status(404).json({
            error: "The User doesn't Exist !",
          });
        }

        //hashing password
        bycrypt.hash(newPassword, 11, async (err, hashedPassword) => {
          if (err) {
            res.json(err);
          }
          let result = await UserModel.updateOne(
            { _id: user._id },
            { $set: { resetPasswordLink: "", password: hashedPassword } }
          );
          if (result) {
            return res.status(200).json({
              success: true,
              message: "You have successfully Reset the password !",
            });
          } else {
            return res.status(500).json({
              error: "The is a Database error !",
            });
          }
        });
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
}

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLoginController=async(req,res)=>{
  try {
    const { idToken } = req.body;
    //get the token from the request
    //verify the token
    client
      .verifyIdToken({ idToken, audience: process.env.GOOGLE_CLIENT_ID })
      .then((response) => {
        const { email_verified, email, name,picture } = response.payload;
        if (email_verified) {
           UserModel.findOne({ email: email }).exec((err, user) => {
            //find if the email already exists
            if (user) {
              const token = jwt.sign({ _id: user._id }, "MYSECRETTOKEN", {
                expiresIn: "7d",
              });
              let { name, _id, email, role, time, createdAt } =
                user;
              let sendUser = {
                name: name,
                id: _id,
                email: email,
                role: role,
                mobile: user.mobile?user.mobile:"",
                avater: picture,
                time: time,
                createdAt: createdAt,
              };

              //sending response to client side with token and user
              return res.status(200).json({
                token: token,
                user: sendUser,
              });
            } else {
              //user doesnot exist then we will generate a password for them and let the login
              const avater = gravatar.url(email, {
                s: "",
                r: "",
                d: "",
              });
              let password= email;
              bycrypt.hash(password, 11, async (err, hashedPassword) => {
                if (err) {
                  res.json(err);
                }
                const user = new UserModel({
                  name,
                  email,
                  mobile:"",
                  password: hashedPassword,
                  avater: picture,
                });
                await user.save((err, userData) => {
                  if(err){
                    return res.status(400).json({
                      error:err.message
                    })
                  }else{
                    const token = jwt.sign({ _id: user._id }, "MYSECRETTOKEN", {
                      expiresIn: "7d",
                    });
                    return res.status(200).json({
                      token: token,
                      user: userData,
                    });
                  }
                });
                
              });
            }
          });
        }
      });
  } catch (error) {
    return res.status(500).json({
      error:error.message
    })
  }
}

module.exports = {
  LoginController,
  activationController,
  RegisterController,
  forgetPasswordController,
  resetPassword,
  googleLoginController,
};
