const express = require("express")
const router = express.Router()
const Task = require("../models/Article");
router.post("/article", async (req,res)=>{
const {title,body} = req.body
const article = await Task.create({title:title,body:body});
res.json(article)
})
module.exports = router