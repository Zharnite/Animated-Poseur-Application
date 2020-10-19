const ObjectId = require('mongoose').Types.ObjectId;
const Animationsprite = require('../models/animationsprite/animationsprite-model');

// The underscore param, "_", is a wildcard that can represent any value;
// here it is a stand-in for the parent parameter, which can be read about in
// the Apollo Server documentation regarding resolvers

/*
TODO:
- Make sure variable & function names are changed to match this applications nomiculters
*/


module.exports = {
	Query: {
		/** 
		 	@param 	 {object} req - the request object containing a user id
			@returns {array} an array of todolist objects on success, and an empty array on failure
		**/
		getAllAnimationsprites: async (_, __, { req }) => {
			const _id = new ObjectId(req.userId);
			if(!_id) { return([])};
			const animationsprite = await Animationsprite.find({owner: _id});
			if(animationsprite) return (animationsprite);

		},
		/** 
		 	@param 	 {object} args - a todolist id
			@returns {object} a todolist on success and an empty object on failure
		**/
		getAnimationspriteById: async (_, args) => {
            const { _id } = args;
            // $$$QUESTON: is _id the objectid of the user that created it?
			const objectId = new ObjectId(_id);
			const animationsprite = await Animationsprite.findOne({_id: objectId});
			if(animationsprite) return animationsprite;
			else return ({});
		},
	},
	Mutation: {
		/** 
		 	@param 	 {object} args - an empty Animationsprite object
			@returns {string} the objectID of the Animationsprite or an error message
		**/
		addAnimationsprite: async (_, args) => {
			const { animationsprite } = args;
			const objectId = new ObjectId();
			const { owner, name, isPublic, width, height, states } = animationsprite;
			const newList = new Animationsprite({
				_id: objectId,
				owner: owner,
				sprite_name: name,
				public: isPublic,
				width: width,
            	height: height,
				animation_states: states
			});
			const updated = newList.save();
			if(updated) return objectId;
			else return ('Could not add animationsprite');
		},
		/** 
		 	@param 	 {object} args - a todolist objectID, field, and the update value
			@returns {boolean} true on successful update, false on failure
		**/
		updateAnimationspriteField: async (_, args) => {
			const { field, value, _id } = args;
			const objectId = new ObjectId(_id);
			const updated = await Animationsprite.updateOne({_id: objectId}, {[field]: value});
			if(updated) return true;
			else return false;
		},
	}
}