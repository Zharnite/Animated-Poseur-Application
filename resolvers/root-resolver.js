// This is how you would collect multiple resolver files in a single source
// to pass to the Apollo Server

// const resolversA, = require('./resolversA');
// const resolversB = require('./resolversB');

// module.exports = [resolversA, resolversB];
const userResolvers = require("./user-resolver");
const animationspriteResolvers = require('./animationsprite-resolver');

module.exports = [userResolvers, animationspriteResolvers];
