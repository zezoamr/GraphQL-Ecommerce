const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const  {typeDefs}  = require("./schema");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { Category } = require("./resolvers/Category");
const { Product } = require("./resolvers/Product");
const {db} = require("./db");



const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query,
    Category,
    Product,
    Mutation,
  },
})

startStandaloneServer(server, {context: () => ({
  db,
})}).then(({ url }) => {
  console.log("Server is up at " + url);
});