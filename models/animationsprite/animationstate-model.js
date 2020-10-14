const { model, Schema, ObjectId } = require('mongoose');
import Frame from "./frame-model"
const animationstateSchema = new Schema(
	{
		animation_state_name: {
			type: String,
			required: true
		},
		isSelected: {
			type: Boolean,
			required: true
        },
        frames: [Frame] 
	},
);

const AnimationState = model('animationstate', animationstateSchema);
module.exports = AnimationState;