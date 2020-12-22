const express = require('express');
const router = express.Router();

const db = require('../database/db');
const bcrypt = require('bcrypt');
const saltRounds = 10; // le nombre de fois que l'on hashe le mdp
const config = require('../modules/config');
const jwt = require('jsonwebtoken');

//______USERS _____________

// Authentification

/* @param name last_name email password*/
 router.post('/users/sign-up', function (req, res) {
        const password = req.body.password;
        let hashpassword = bcrypt.hashSync(password, saltRounds)
        console.log(req.body.password);
        console.log(req.body.email);
        console.log(req.body.name);
        console.log(hashpassword);
        console.log(req.body.last_name);

        let newUser = `INSERT INTO users (name, email, password, last_name, pp) VALUES ('${req.body.name}','${req.body.email}','${hashpassword}','${req.body.last_name}', '${req.body.pp}')`; // on a remplacé '${req.body.password}' par hash au moment de crypter le mdp
        db.query(newUser, function (err, result) { // envoyer mon newUser dans ma database
            if (err) throw err;
            console.log("one user inserted");
            res.send(result)

        });

    });

/* @param email password*/
router.post('/users/sign-in', function(req, res) {
    // let email = req.body.email
    // let password = req.body.password

     db.query(`SELECT * FROM users WHERE email = '${req.body.email}'`, function (err, result) { // *=tout
        if (err) throw err;
        if (result.length) {
            bcrypt.compare(req.body.password, result[0].password, function(err,theuser){
              console.log(theuser);
              if(theuser) {
                let token = jwt.sign({ id: result[0].id, name: result[0].name }, config.secret, { expiresIn: 86400 });
                console.log(token);
                res.send({ auth: true, token: token, user: result[0] }); 
              } else {
                res.status(400).send("wrong password") //rajout de .status(400)
              }
          })
  
          } else {
            res.status(400).send("sorry we don't know this user") //rajout de .status(400)
          }
          
        });
  
    });

module.exports = router;