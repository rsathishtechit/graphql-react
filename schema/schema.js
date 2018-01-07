const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const users = [
    {id: '23', firstName: "sathish", age: 28},
    {id: '47', firstName: 'makesh', age: 32},
]

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
                return _.find(users, { id: args.id });
            }
        }
    }
})