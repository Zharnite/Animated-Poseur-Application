const { model, Schema, ObjectId } = require('mongoose');
const Layer = require("./layer-model").schema;


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
        layers: [Layer] 
	}
);

const Frame = model('Frame', frameSchema);
module.exports = Frame;