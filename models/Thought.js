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
        },
        reactions: [reactionSchema]
    },
    {
         toJSON: {
          getters: true,
        },
        id: false,
    }
);

const reactionSchema = new Schema(
    {
     reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
  },
    reactionBody: {
        type: String,
        required: true,
        min: 1,
        max: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (Date) => timeSince(Date)
    }
},
{
    toJSON: {
      getters: true
    },
    id: false
  }
);

reactionSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
const Reaction = model('Reaction', reactionSchema);
module.exports = (Thought, Reaction);