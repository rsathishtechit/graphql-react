import { GraphQLString, GraphQLInt } from '../../../Library/Caches/typescript/2.6/node_modules/@types/graphql/type/scalars';

const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString},
        firstName: { type: GraphQLString},
        age: { type: GraphQLInt}
    }
});

const RootQuery= new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                
            }
        }
    }
})