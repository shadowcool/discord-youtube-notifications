const { Schema, model } = require("mongoose");

const channelSchema = new Schema({
    youtube: {
        type: String,
        required: true,
        unique: true
    },
    channel: {
        type: String,
    },
    lastVideo: {
        type: String,
    },
    lastPublish: {
        type: Number,
    },
    message: {
        type: String,
    },
})

module.exports = model("youtube", channelSchema)