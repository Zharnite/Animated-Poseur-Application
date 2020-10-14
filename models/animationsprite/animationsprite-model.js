const { model, Schema, ObjectId } = require('mongoose');
import AnimationState from "./animationstate-model"


const animationspriteSchema = new Schema(
	{
		_id: {
			type: ObjectId,
			required: true
		},
		id: {
			type: Number,
			required: true
		},
		sprite_name: {
			type: String,
			required: true
        },
        public: {
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

const AnimationSprite = model('animationsprite', animationspriteSchema);
module.exports = AnimationSprite;