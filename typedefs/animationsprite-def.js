const { gql } = require('apollo-server');


const typeDefs = gql `
	type Animationsprite{
		_id: String!
        sprite_name: String!
        public: Boolean!
        width: Number!
        height: Number!
		animation_states:[Animationstate]
	}
	type Animationstate {
		_id: String!
		animation_state_name: String!
        layers: [Layer]
        layers: [Frame]
    }
    type Layer {
		_id: String!
		layer_name: String!
        isVisable: Boolean!
        isLocked: Boolean!
    }
    type Frame {
        position: Number!
        data: String!
    }
	extend type Query {
		getAllAnimationsprite: [Animationsprite]
		getAnimationspriteById(_id: String!): Animationsprite 
	}
	extend type Mutation {
		addAnimationsprite(animationsprite: AnimationspriteInput!): String
		addLayer(layer: LayerInput!): String
		addFrame(item: FrameInput!): String
	}
	input AnimationspriteInput {
		_id: String!
        sprite_name: String!
        public: Boolean!
        width: Number!
        height: Number!
		animation_states:[Animationstate]
	}
	input LayerInput {
		_id: String!
		layer_name: String!
        isVisable: Boolean!
        isLocked: Boolean!
    }
	type FrameInput {
        position: Number!
        data: String!
    }
`;

module.exports = { typeDefs: typeDefs }