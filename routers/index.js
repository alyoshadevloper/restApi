const express = require('express')
const router = express.Router()
const Movie  = require('../model/Movie')

app.get('/' , (req , res) => {
    res.send('salom method of get')
})

app.post('/' , (req , res) => {
    const {title , category , country , year , imdb_score} = req.body
  const db = new Movie({
      title:title,
      category: category,
      country:country,
      year: year,
      imdb_score: imdb_score
  })
  const promise = db.save()
        promise.then(data => {
           res.json(data)
       })
       .catch(err => {
           console.log(err)
       })
})

module.exports  = router