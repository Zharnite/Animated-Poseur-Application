import gql from "graphql-tag";
import * as queries from "./queries";
export default {
  Query: {
    // ====================== User Query Resolvers ====================== //
    // ====================== Item Query Resolvers ====================== //
    // ====================== Todolist Query Resolvers ================== //
  },
  Mutation: {
    // ====================== User Mutation Resolvers ====================== //
    // ====================== Item Mutation Resolvers ====================== //

    // ====================== Todolist Mutation Resolvers ================== //
    updateLocalAnimationspriteField: (_root, args, { cache, getCacheKey }) => {
      // opcodes:
      // 0: mutate non-nested list field
      // 1: add a todolist
      // 2: delete a todolsit
      // 3: add a todo item
      // 4: delete a todo item
      // 5: mutate non nested item field
      const _id = getCacheKey({ __typename: "Animationsprite", _id: args._id });
      const { field, value, opcode } = args;
      let data;
      let fragment;
      let updatedItems;
      switch (opcode) {
        case(1):
					const addAnimationsprite = cache.readQuery({query: queries.GET_LOCAL_ANIMATIONSPRITES});
					let updatedAnimationsprite = addAnimationsprite.getAllAnimationsprites;
					updatedAnimationsprite.push(value);
					data = {...addAnimationsprite, animation: updatedAnimationsprite};
					cache.writeData({data});
					break
      }
      return null;
    },
  },
};
