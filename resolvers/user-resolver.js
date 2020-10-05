const ObjectId = require('mongoose').Types.ObjectId;
const bcrypt = require('bcryptjs');
const User = require('../models/user-model');
const tokens = require('../utils/tokens');

module.exports = {
	Query: {
		/** 
		 	@param 	 {object} req - the request object containing a user id
			@returns {object} the user object on success and an empty object on failure 
		**/
		getCurrentUser: async (_, __, { req }) => {
			const _id = new ObjectId(req.userId);
			if(!_id) { return({}) }
			const found = await User.findOne(_id);
			if(found) return found;
		},
	},
	Mutation: {
		/** 
			@param 	 {object} args - login info
			@param 	 {object} res - response object containing the current access/refresh tokens  
			@returns {object} the user object or an object with an error message
		**/
		login: async (_, args, { res }) => {	
	
			const { email, password } = args;

			const user = await User.findOne({email: email});
			if(!user) return({msg: 'User with that email not found.'});

			const valid = await bcrypt.compare(password, user.password);
			if(!valid) return({msg: 'Invalid password.'});
			// Set tokens if login info was valid
			const accessToken = tokens.generateAccessToken(user);
			const refreshToken = tokens.generateRefreshToken(user);
			res.cookie('refresh-token', refreshToken, { httpOnly: true}); 
			res.cookie('access-token', accessToken, { httpOnly: true}); 
			return user;
		},
		/** 
			@param 	 {object} args - registration info
			@param 	 {object} res - response object containing the current access/refresh tokens  
			@returns {object} the user object or an object with an error message
		**/
		register: async (_, args, { res }) => {
			console.log(args)
			const { username, email, password} = args;
			const alreadyRegistered = await User.findOne({email: email});
			if(alreadyRegistered) {
				return({msg: 'User with that email already registered.'});
			}
			const hashed = await bcrypt.hash(password, 10);
			const _id = new ObjectId();
			const user = new User({
				_id: _id,
				username: username,
				email: email, 
                password: hashed,
                photo: "",
                realname: "",
                description: ""
				
			})
			const saved = await user.save();
			// After registering the user, their tokens are generated here so they
			// are automatically logged in on account creation.
			const accessToken = tokens.generateAccessToken(user);
			const refreshToken = tokens.generateRefreshToken(user);
			res.cookie('refresh-token', refreshToken, { httpOnly: true}); 
			res.cookie('access-token', accessToken, { httpOnly: true}); 
			return user;
		},
		/** 
			@param 	 {object} res - response object containing the current access/refresh tokens  
			@returns {boolean} true 
		**/
		logout:(_, __, { res }) => {
			res.clearCookie('refresh-token');
			res.clearCookie('access-token');
			return true;
		}
	}
}