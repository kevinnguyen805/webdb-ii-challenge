const express = require('express');
const db = require('../data/dbConfig.js');
const router = express.Router();


router.get('/', (req, res) => {
     db('cars')
     .then(response => {
          res.status(200).json(response)
     })
     .catch(error => {
          res.status(500).json({error: "Unable to retrieve cars"})
     })
})


router.get('/:id', (req, res) => {
     db('cars')
     .where(req.params.id)
     .first()
     .then(car => {
          response.status(200).json(car)
     })
     .catch(error => {
          res.status(500).json({error: "Unable to retrieve cars"})
     })
})


router.post('/', (req, res) => {
     let post = req.body

     db('cars').insert(post)
     .then(response => {
          res.status(200).json(response)
     })
})



// middleware
// function authenticateCarPost (req, res, next){
//      let post = req.body
//      if (req.body){
//           if(req.body.)
//      }
// }

module.exports = router;


