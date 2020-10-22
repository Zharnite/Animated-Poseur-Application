const { gql } = require("apollo-server");

const typeDefs = gql`
  type Animationsprite {
    _id: String!
    owner: String!
    sprite_name: String!
    isPublic: Boolean!
    width: Int!
    height: Int!
    animation_states: [Animationstate]
  }
  type Animationstate {
    animation_state_name: String!
    frames: [Frame]
  }
  type Frame {
    position: Int!
    duration: Int!
    layers: [Layer]
  }
  type Layer {
    layer_name: String!
    isVisable: Boolean!
    isLocked: Boolean!
    data: String
  }
  extend type Query {
    getAllAnimationsprites: [Animationsprite]
    getAnimationspriteById(_id: String!): Animationsprite
  }
  extend type Mutation {
    addAnimationsprite(animationsprite: AnimationspriteInput!): String
    updateAnimationspriteField(_id: String!, field: String!, value: String!): Boolean
  }
  input AnimationspriteInput {
    _id: String
    owner: String
    sprite_name: String
    isPublic: Boolean
    width: Int
    height: Int
    animation_states: [AnimationstateInput]
  }
  input AnimationstateInput{
    animation_state_name: String
    frames: [FrameInput]
  }
  input FrameInput {
    position: Int
    duration: Int
    layers: [LayerInput]
  }
  input LayerInput {
    layer_name: String
    isVisable: Boolean
    isLocked: Boolean
    data: String
  }
`;

module.exports = { typeDefs: typeDefs };
