const express = require("express")
const isAnimal = require("./isAnimal.js")
const app = express()
let port = 3000


app.get('/animal/:choice', isAnimal.isAnimal , (req,res) => {
  if (res.message === true) {
    console.log(res)
    res.json({status: "success" ,
    message: true})
  } else {
    res.json({status: "success" ,
     message: false})
  }
})


app.listen(port, () => {
  console.log("made it")
})
