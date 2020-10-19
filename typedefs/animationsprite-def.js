const { gql } = require("apollo-server");

const typeDefs = gql`
  type Animationsprite {
    _id: String!
    owner: String!
    sprite_name: String!
    public: Boolean!
    width: Int!
    height: Int!
    animation_states: [Animationstate]
  }
  type Animationstate {
    animation_state_name: String!
    isSelected: Boolean!
    frames: [Frame]
  }
  type Frame {
    position: Int!
    duration: Int!
    isSelected: Boolean!
    layers: [Layer]
  }
  type Layer {
    layer_name: String!
    isVisable: Boolean!
    isLocked: Boolean!
    isSelected: Boolean!
    data: String!
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
    public: Boolean
    width: Int
    height: Int
    animation_states: [AnimationstateInput]
  }
  input AnimationstateInput{
    animation_state_name: String
    isSelected: Boolean
    frames: [FrameInput]
  }
  input FrameInput {
    position: Int
    duration: Int
    isSelected: Boolean
    layers: [LayerInput]
  }
  input LayerInput {
    layer_name: String
    isVisable: Boolean
    isLocked: Boolean
    isSelected: Boolean
    data: String
  }
`;

module.exports = { typeDefs: typeDefs };
