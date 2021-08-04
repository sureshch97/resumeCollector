const express = require('express');
const router = express.Router();
const Profile = require('../models/profile')
const { check, validationResult } = require('express-validator')
const path = require('path');




//POST A profile
//route /api/profile
router.post('/', [
  check('firstname', 'name is required').not().isEmpty(),
  check('lastname', 'lastname is required').not().isEmpty(),
  check('email', 'email is required').not().isEmpty(),
],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      firstname,
      lastname,
      email,
      phonenumber,
      location,
      experience,
      company, } = req.body;

    try {
      if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
      }
      const file = req.files.file;

      file.mv(`${__dirname}/../frontend/public/uploads/${file.name}`, async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).send(err);
        }


        newProfile = new Profile({
          firstname,
          lastname,
          email,
          phonenumber,
          location,
          experience,
          company,
          resume: `/uploads/${file.name}`

        })

        await newProfile.save();
        console.log(newProfile)
        return res.json(newProfile)
      })

    }
    catch (error) {

      console.error(error.message);
      res.status(500).send("Server Error");


    }

  });

module.exports = router