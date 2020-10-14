const { gql } = require("apollo-server");

const typeDefs = gql`
  type Animationsprite {
    _id: String!
    sprite_name: String!
    public: Boolean!
    width: Number!
    height: Number!
    animation_states: [Animationstate]
  }
  type Animationstate {
    animation_state_name: String!
    isSelected: Boolean!
    frames: [Frame]
  }
  type Frame {
    position: Number!
    duration: Number!
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
    getAllAnimationsprite: [Animationsprite]
    getAnimationspriteById(_id: String!): Animationsprite
  }
  extend type Mutation {
    addAnimationsprite(animationsprite: AnimationspriteInput!): String
    addLayer(layer: LayerInput!): String
    addFrame(item: FrameInput!): String
  }
  input AnimationspriteInput {
    _id: String
    id: Int    
    sprite_name: String
    public: Boolean
    width: Number
    height: Number
    animation_states: [Animationstate]
  }
  input AnimationstateInput{
    animation_state_name: String
    isSelected: Boolean
    frames: [Frame]
  }
  type FrameInput {
    position: Number
    duration: Number
    isSelected: Boolean
    layers: [Layer]
  }
  type Layer {
    layer_name: String
    isVisable: Boolean
    isLocked: Boolean
    isSelected: Boolean
    data: String
  }
`;

module.exports = { typeDefs: typeDefs };
