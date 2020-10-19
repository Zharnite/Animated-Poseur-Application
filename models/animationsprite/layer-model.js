const { model, Schema, ObjectId } = require('mongoose');


const layerSchema = new Schema(
	{
		layer_name: {
			type: String,
			required: true
        },
        isVisable: {
			type: Boolean,
			required: true
        },
        isLocked: {
			type: Boolean,
			required: true
		},
		isSelected: {
			type: Boolean,
			required: true
		},
		data : {
			type: String,
			required: true
		}
	}
);

const Layer = model('Layer', layerSchema);
module.exports = Layer;