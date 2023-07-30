const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const  {typeDefs}  = require("./schema.js");
const {db} = require("./db.js");



const server = new ApolloServer({
  typeDefs,
  resolvers:{},
  context: {
    db,
  },
})

startStandaloneServer(server).then(({ url }) => {
  console.log("Server is up at " + url);
});