// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    price: Float!
    image: String!
    onSale: Boolean!
    category: String
    reviews: [Review!]!
  }

  type Category {
    id: ID!
    name: String
    products(filter: ProductsFilterInput): [Product!]!
  }

  type Review {
    id: ID!
    date: String
    title: String
    comment: String
    rating: Int
  }

  input ProductsFilterInput{
    onSale: Boolean
    avgRating: Int
  }


  type Query {
    hello: String
    products(filter: ProductsFilterInput): [Product!]
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Mutation {
    deleteCategory(id: ID!): Boolean!
    deleteProduct(id: ID!): Boolean!
    deleteReview(id: ID!): Boolean!
  }

`;

module.exports = {typeDefs}