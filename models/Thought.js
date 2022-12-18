const { Schema, model, Types } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min: 1,
            max: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (Date) => timeSince(Date)
        },
        username: {
            type: String,
            required: true,
            ref: 
        }
    }
)