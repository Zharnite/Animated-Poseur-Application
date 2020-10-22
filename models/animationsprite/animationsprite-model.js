const { model, Schema, ObjectId } = require('mongoose');
const AnimationState = require("./animationstate-model").schema;

const animationspriteSchema = new Schema(
	{
		_id: {
			type: ObjectId,
			required: true
		},
		owner: {
			type: String,
			required: true
		},
		sprite_name: {
			type: String,
			required: true
        },
        isPublic: {
			type: Boolean,
			required: true
        },
        width: {
			type: Number,
			required: true
        },
        height: {
            type: Number,
            required: false
        },
        animation_states: [AnimationState]
	},
	{ timestamps: true }
);

const Animationsprite = model('Animationsprite', animationspriteSchema);
module.exports = Animationsprite;