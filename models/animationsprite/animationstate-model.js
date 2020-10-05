const { model, Schema, ObjectId } = require('mongoose');
import Frame from "./frame-model"
import Layer from "./layer-model"
const animationstateSchema = new Schema(
	{
        _id: {
			type: ObjectId,
			required: true
		},
		animation_state_name: {
			type: String,
			required: true
        },
        layers: [Layer],
        frames: [Frame] 
	},
	{ timestamps: true }
);

const AnimationState = model('animationstate', animationstateSchema);
module.exports = AnimationState;