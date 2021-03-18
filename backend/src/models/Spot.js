const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    image: String,
    company: String,
    price: Number,
    techs: [String],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('image_url').get(function(){
    return `http://localhost:4000/files/${this.image}`
})

module.exports = mongoose.model("Spot", SpotSchema);