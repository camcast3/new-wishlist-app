const express = require('express')

const WishCtrl = require('../controllers/wish-ctrl')

const router = express.Router()

//Create a new wish
router.post('/wish', WishCtrl.createWish)

//Edit a wish that belongs to you - should only be called by the creator
//router.put('/wish/creator/:id', WishCtrl.creatorEditWish)

//Giver signals they will buy item taking it off the view for everyone but the creator
//router.put('/wish/giver/:id', WishCtrl.giverChangeWishState)

//Delete a wish that belongs to you - should only be called by the creator
//router.delete('/wish/:id', WishCtrl.deleteMovie)

//Grab all items for a given creator
//router.get('/wish/:creatorId', WishCtrl.getMovieById)

module.exports = router