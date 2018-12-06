function range(req,res,next) {
  res.range = [];
  res.num;
  for (let i = req.query.floor; i <= req.query.ceil; i++){
    res.range.push(i)
    res.num = res.range[(Math.floor(Math.random()*((res.range).length)))]
  }
  next()
}

module.exports = {
  range: range
}
