let list = ['xavier', 'michelle', 'corey', 'reed']

function peek(req, res, next){
  req.message = list[list.length-1]
  next()
}

function enqueue(req,res,next){
  list.unshift(req.query.name)
  req.data = list
  next()
}

function dequeue(req,res,next){
  req.reuse  = list.pop()
  next()
}

module.exports = {
 peek,
 enqueue,
 dequeue
}
