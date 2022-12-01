const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Wish = new Schema(
    {
        name: { type: String, required: true },
        imageUrl: { type: String, required: true },
        itemUrl: { type: String, required: true },
        price: { type: String, required: false },
        creatorId: { type: String, required: true },
        state: { type: String, enum: ['open', 'close'], required: true },
        giverId: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('wishes', Wish)