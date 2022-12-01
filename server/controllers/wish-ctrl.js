const Wish = require('../models/wish-model')

createWish = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a wish',
        })
    }

    const wish = new Wish(body)

    wish.creatorId = "509f3dfb917f5401"
    wish.state ="open"
    wish.giverId = "empty"

    if (!wish) {
        return res.status(400).json({ success: false, error: err })
    }

    wish
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: wish._id,
                message: 'Wish created!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Wish not created!',
            })
        })
}
/*
creatorEditWish = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Wish.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Wish not found!',
            })
        }
        movie.name = body.name
        movie.time = body.time
        movie.rating = body.rating
        movie
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: movie._id,
                    message: 'Wish updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Wish not updated!',
                })
            })
    })
}

deleteMovie = async (req, res) => {
    await Wish.findOneAndDelete({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Wish not found` })
        }

        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovieById = async (req, res) => {
    await Wish.findOne({ _id: req.params.id }, (err, movie) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!movie) {
            return res
                .status(404)
                .json({ success: false, error: `Wish not found` })
        }
        return res.status(200).json({ success: true, data: movie })
    }).catch(err => console.log(err))
}

getMovies = async (req, res) => {
    await Wish.find({}, (err, movies) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!movies.length) {
            return res
                .status(404)
                .json({ success: false, error: `Wish not found` })
        }
        return res.status(200).json({ success: true, data: movies })
    }).catch(err => console.log(err))
}
*/
module.exports = {
    createWish
//    updateMovie,
//    deleteMovie,
//    getMovies,
//    getMovieById,
}