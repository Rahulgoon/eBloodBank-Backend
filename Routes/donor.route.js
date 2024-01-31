const express = require("express");
const Donor = require("../Models/donor.model");

const route = express.Router();

route.post("/donate", async (req, res) => {
  //console.log(req.body)
  const { name, gender, bloodgroup, birthyear, mobile, email, address } =
    req.body;
  try {
    const isPresent = await Donor.findOne({ email });
    if(isPresent) {
        return res.status(404).send("Email Already Exist");
    }
    const donorData = new Donor({
      name,
      gender,
      bloodgroup,
      birthyear,
      mobile,
      email,
      address,
    });
  
    await donorData.save();
    res.status(201).send("Donor Created Successfully");
  } catch (error) {
    res.status(404).send(error.message);
  }
  // console.log(req.body)
});

route.get("/donate", async (req, res) => {
  try {
    const getDonor = await Donor.find();
    res.status(200).send(getDonor);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = route;