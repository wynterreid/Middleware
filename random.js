const express = require("express")
const range = require("./range.js")
const app = express()
const port = 3000

app.get('/', range.range , (req,res,next) => {
  console.log(req.query.floor)
  res.json({
  status: "success",
  range:[(req.query.floor),(req.query.ceil)],
  randPick: res.num
})
})

app.listen(port, () => {
  console.log("made it")
})
