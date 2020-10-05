const { model, Schema, ObjectId } = require('mongoose');

const frameSchema = new Schema(
	{
        _id: {
			type: ObjectId,
			required: true
		},
		position:{
            type: Number,
            required: true
        },
        data:{
            type: Number,
            required: true
        }
	}
);

const Frame = model('Frame', frameSchema);
module.exports = Frame;