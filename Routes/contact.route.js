const express = require("express");
const Contact = require("../Models/contact.model.js");

const route = express.Router();

route.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const contactIsPresent = await Contact.findOne({ email });
    if (contactIsPresent) {
      return res.status(404).send("Email Already Exists");
    }
    const contactData = new Contact({ name, email, subject, message });
    await contactData.save();
    res.status(201).send("Your message has been sent. Thank you!");
  } catch (error) {
    res.status(404).send(error.message);
  }
});

route.get("/contact", async (req, res) => {
  try {
    const getContact = await Contact.find();
    res.status(200).send({ Contact: getContact });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = route;