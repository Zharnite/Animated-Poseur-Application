const { model, Schema, ObjectId } = require('mongoose');

const layerSchema = new Schema(
	{
        _id: {
			type: ObjectId,
			required: true
		},
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
	}
);

const Layer = model('Layer', layerSchema);
module.exports = Layer;