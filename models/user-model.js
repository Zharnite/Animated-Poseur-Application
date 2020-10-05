const { model, Schema, ObjectId } = require('mongoose');

const userSchema = new Schema(
	{
		_id: {
			type: ObjectId,
			required: true
		},
		username: {
			type: String,
			required: true
        },
        email: {
			type: String,
			required: true
        },
        password: {
			type: String,
			required: true
        },
        photo: {
            type: String,
            required: false
        },
        realname: {
			type: String,
			required: false
		},
   //      description: {
			// type: String,
			// required: true
   //      }
	},
	{ timestamps: true }
);

const User = model('User', userSchema);
module.exports = User;