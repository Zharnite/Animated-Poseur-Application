const { model, Schema, ObjectId } = require('mongoose');
import Layer from "./layer-model"

const frameSchema = new Schema(
	{
		position:{
            type: Number,
            required: true
        },
        duration:{
            type: Number,
            required: true
        },
        isSelected: {
			type: Boolean,
			required: true
        },
        layers: [Layer] 
	}
);

const Frame = model('Frame', frameSchema);
module.exports = Frame;