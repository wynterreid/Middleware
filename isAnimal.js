const isAnimal = (req,res,next) => {
  let animals = ["tiger","lion","bear","cat","dog","bird","horse","fish","koala","bull"]

    if (animals.includes(req.params.choice)) {
      res.message = true
    } else {
      res.message = false
    }
    next()
  }

module.exports = {
  isAnimal: isAnimal
}
