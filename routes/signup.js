const {User} = require('../models/dbschema');
const express = require('express');
const joi = require('joi');

const router = express.Router();

router.post('/singnup', async (req, res) => {
      
       const schema = joi.object({
        userName: joi.string().min(5).max(100).required(),
        email: joi.string().min(5).max(40),
        password: joi.string().min(5).max(40)

     })
       // my value
    const {value, error} = schema.validate(req.body)

     console.log(value, error)

    const { userName, email, password} = req.body;

    let user = new User({
        userName,
        email,
       password,
    });

    try{
        user = await user.save();
        res.send(user);
    } catch (error) {
        res.status(500).send(error.message);
        console.log(error.message);
    }
});

module.exports = router