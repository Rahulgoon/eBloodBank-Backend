const express = require('express');
const Notice = require("../Models/notice.model.js");

const route = express.Router();

route.post("/notice",async(req,res) => {
    const {date,title,content} = req.body;
    try {
        const noticeData = new Notice({
            date,
            title,
            content
        })
        await noticeData.save()
        res.status(201).send("Notice post Successfully");
    } catch (error) {
        res.status(404).send(error.message);
    }
});

route.get("/notice",async(req,res) => {
    try {
        const getNotice = await Notice.find()
        res.status(200).send({Notice : getNotice})
    } catch (error) {
        res.status(500).send({message : error.message})
    }
});

module.exports = route