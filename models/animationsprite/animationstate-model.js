const { model, Schema, ObjectId } = require('mongoose');
const Frame = require("./frame-model").schema;

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

const AnimationState = model('Animationstate', animationstateSchema);
module.exports = AnimationState;