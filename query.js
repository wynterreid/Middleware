const express = require('express')
const {peek} = require("./functions.js")
const {enqueue} = require("./functions.js")
const {dequeue} = require("./functions")
const app = express()
const port = 3000


app.get('/queue/peek', peek  , (req,res) => {
  res.json({
    status: "success",
    data: req.message
  })
})


app.get('/queue/enqueue', enqueue , (req,res) => {
  console.log(req.data)
  res.json({
      status: "success",
      enqueued: req.query.name
    })

})


app.get('/queue/dequeue', dequeue , (req,res) => {
  res.json({
    status: "success",
    dequeued: req.reuse
  })
})

app.listen(port, () => {
  console.log("listening to 3 thoooouuu")
})
