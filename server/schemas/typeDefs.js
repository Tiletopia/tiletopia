const gql = require('graphql-tag');

const typeDefs = gql`

    type Profile{
        id:ID!
        username:String!
        password:String!
        email:String!
    }
    type Query{
        getProfile:[Profile]
    }
    
`;

module.exports = typeDefs;