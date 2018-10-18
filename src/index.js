import { GraphQLServer } from 'graphql-yoga'
import { typeDefs } from './models/typeDefs'
import { resolvers } from './resolvers'

//create the server for GraphQL
const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('the server is up!')
})