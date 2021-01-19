//const User = require("../models/user");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const cryptoJS = require("crypto-js");
const functions = require("./functions");
const models = require("../models");

const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Variables used to verify / lock a user
const MAX_LOGIN_ATTEMPTS = 3;

function incrementLoginAttempt(emailHash, loginAttempts) {
  console.log("Dans incrementLoginAttempt");
  User.update(
    { login_attempts: loginAttempts.login_attempts + 1 },
    {
      where: { emailHash: emailHash },
    }
  );
}

exports.signup = (req, res, next) => {
  let name = req.body.name;
  let surname = req.body.surname;
  let password = req.body.password;

  // Hash the email the have a unique validation
  let emailHash = cryptoJS.MD5(req.body.email).toString();
  // Encrypt the email with crypto-js ( Secret passphrase needs to be changed in production )
  let emailEncrypted = cryptoJS.AES.encrypt(
    req.body.email,
    "Secret Passphrase"
  ).toString();

  if (
    emailHash == null ||
    name == null ||
    surname == null ||
    password == null
  ) {
    return res.status(400).json({ error: "missing parameters" });
  }

  // TODO check variables
  if (
    name.length >= 20 ||
    name.length < 2 ||
    surname.length >= 20 ||
    surname.length < 2
  ) {
    return res
      .status(400)
      .json({ error: "Wrong name or surname (must be length 2 - 30)" });
  }

  if (!EMAIL_REGEX.test(req.body.email)) {
    return res.status(400).json({ error: "email is not valid" });
  }

  if (!functions.checkPassword(password)) {
    return res.status(400).json({
      error: "Password is not valid (must be length min 4 and include 1 number",
    });
  }

  // Check if user already exist
  models.User.findOne({
    attributes: ["emailHash"],
    where: { emailHash: emailHash },
  })
    .then((user) => {
      if (!user) {
        bcrypt
          .hash(password, 10)
          .then(async (hash) => {
            const newUser = await models.User.create({
              name: name,
              surname: surname,
              email: emailEncrypted,
              emailHash: emailHash,
              password: hash,
              admin: 0,
            });
            newUser
              .save()
              .then(() =>
                res.status(201).json({
                  message:
                    "Utilisateur créé ! " + "userId " + ": " + newUser.id,
                })
              )
              .catch((error) => res.status(400).json({ error }));
          })
          .catch((error) => res.status(500).json({ error }));
      } else {
        return res.status(409).json({ error: "email already used" });
      }
    })
    .catch((error) => {
      return res.status(500).json({ error: "unable to verify user" });
    });
};

exports.login = (req, res, next) => {
  console.log("email: " + req.body.email + " password: " + req.body.password);
  let emailHash = cryptoJS.MD5(req.body.email).toString();
  let password = req.body.password;

  if (emailHash == null || password == null) {
    return res.status(400).json({ error: "Missing parameters" });
  }

  // Check if user already exist
  models.User.findOne({
    where: { emailHash: emailHash },
  })
    .then((user) => {
      // If the user is not found return error
      if (!user) {
        return res
          .status(401)
          .json({ error: "Nom d'utilisateur (ou mot de passe) incorrect" });
      }
      // Test if the account is already locked
      if (functions.checkIfAccountIsLocked(user.lock_until)) {
        let waitingTime = (user.lock_until - Date.now()) / 1000 / 60;
        return res.status(401).json({
          error: "Compte bloqué, revenez dans: " + waitingTime + " minutes",
        });
      }
      // If the lockUntil is finished => reset loginAttempt
      if (user.lock_until && user.lock_until <= Date.now()) {
        // Reset of loginAttempt
        functions
          .resetUserLockAttempt(emailHash, user)
          //
          .then(() => {
            bcrypt
              .compare(req.body.password, user.password)
              .then((valid) => {
                // If the password is wrong but the max connection attempt is not reached, then increment the loginAttempt by 1
                if (!valid) {
                  // Increment value to the loginAttempts
                  functions
                    .incrementLoginAttempt(emailHash, user)
                    .catch((error) => console.log({ error }));
                  //
                  return res
                    .status(401)
                    .json({ error: "Mot de passe (ou email) incorrect !" });
                } else {
                  // User connected, send a simple toker
                  functions.sendNewToken(user._id, res);
                  //.catch((error) => console.log({ error }));
                  //
                }
              })
              .catch((error) => res.status(500).json({ error }));
          })
          .catch((error) => console.log({ error }));
        //
      } else {
        bcrypt
          .compare(req.body.password, user.password)
          .then((valid) => {
            // If it's a wrong password and the connection attempt is reached, then block the account
            if (!valid && user.login_attempts + 1 >= MAX_LOGIN_ATTEMPTS) {
              console.log(
                "Limite d'essai de connection atteinte, blockage du compte"
              );
              functions
                .blockUserAccount(emailHash, user)
                .catch((error) => console.log({ error }));
              return res.status(401).json({
                error:
                  "Mot de passe (ou email) incorrect ! Vous avez atteint le nombre maximum d'essai, votre compte est maintenant bloqué!",
              });
            }
            // If the password is wrong but the max connection attempt is not reached, then increment the loginAttempt by 1
            if (!valid && user.login_attempts + 1 < MAX_LOGIN_ATTEMPTS) {
              console.log("increment value stade 1");
              // Increment value to the loginAttempts
              try {
                functions.incrementLoginAttempt(emailHash, user);
              } catch (e) {
                console.log(e);
              }
              //
              return res
                .status(401)
                .json({ error: "Mot de passe (ou email) incorrect !" });
            }
            // If the user is connected but had loginAttempt > 0 => reset try + send token
            if (user.login_attempts > 0) {
              functions
                .resetUserLockAttempt(emailHash, user)
                .then(() => {
                  functions.sendNewToken(user, res);
                })
                .catch((error) => console.log({ error }));
            } else {
              // User connected, send a simple token in a cookie
              functions.sendNewToken(user, res);
            }
          })
          .catch((error) => res.status(500).json({ error: error }));
      }
    })
    .catch((error) => res.status(500).json({ error }));
};

exports.getUserProfile = (req, res, next) => {
  // Getting auth header
  let userInfos = functions.getInfosUserFromToken(req, res);
  let CurrentUserId = req.params.id;

  if (userInfos.userId < 0) {
    return res.status(400).json({ error: "Wrong token" });
  }

  models.User.findOne({
    attributes: ["id", "name", "surname", "email", "createdAt"],
    where: { id: CurrentUserId },
  })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      }
      if ((user && user.id === userInfos.userId) || userInfos.admin === true) {
        user.dataValues.canEdit = true;
        if (userInfos.admin === true) {
          user.dataValues.isAdmin = true;
          res.status(200).json(user);
        } else {
          res.status(200).json(user);
        }
      } else if (user) {
        res.status(200).json(user);
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Cannot fetch user" });
    });
};

exports.updateUserProfile = (req, res, next) => {
  // Getting auth header
  let userInfos = functions.getInfosUserFromToken(req, res);
  let CurrentUserId = req.params.id;

  if (userInfos.userId < 0) {
    return res.status(400).json({ error: "Wrong token" });
  }

  // Params
  let name = req.body.name;
  let surname = req.body.surname;

  models.User.findOne({
    attributes: ["id", "name", "surname"],
    where: { id: CurrentUserId },
  })
    .then((user) => {
      if (!user) {
        res.status(404).json({ error: "User not found" });
      }
      if ((user && user.id === userInfos.userId) || userInfos.admin === true) {
        user
          .update({
            name: name ? name : user.name,
            surname: surname ? surname : user.surname,
          })
          .then((updated) => {
            if (updated) {
              res.status(201).json("Profile mis à jour");
            } else {
              res.status(500).json({ error: "Cannot update profile" });
            }
          });
      } else {
        res.status(400).json({ error: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: "Unable to verify user" });
    });
};

exports.deleteUserProfile = (req, res) => {
  let userInfos = functions.getInfosUserFromToken(req, res);
  let CurrentUserId = req.params.id;

  if (userInfos.userId < 0) {
    return res.status(400).json({ error: "Wrong token" });
  }

  models.User.findOne({
    where: { id: CurrentUserId },
    attributes: ["id", "name", "surname", "email", "createdAt"],
  })
    .then((user) => {
      console.log(user.id);
      console.log(userInfos.userId);
      console.log(userInfos.admin);
      

      if ((user && user.id === userInfos.userId) || userInfos.admin === true) {
        async function destroyUser(userId) {
          await models.User.destroy({
            where: { id: userId },
          });
        }
        destroyUser(user.id)
          .then(() => {
            console.log("User supprimé");
            res.status(200).json({ message: "User supprimé !" });
          })
          .catch((error) => res.status(400).json({ error }));
      }
    })
    .catch((error) => {
      return res.status(404).json({ error: error });
    });
};

exports.logout = (req, res, next) => {
  functions.eraseCookie(res);
};
