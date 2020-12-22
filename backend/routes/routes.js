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



module.exports = router;