const { makeExecutableSchema } = require("graphql-tools");
const resolvers = require("./resolvers");


const typeDefs = `
    type Note{
        _id: ID!,
        title: String!,
        date: Date!,
        content: String!
    }
    
    scalar Date

    type Query{
        allNotes: [Note],
        getNote(_id: ID!): Note
    }

    input NoteInput{
        title: String!,
        content: String!
    }

    type Mutation{
        createNote(input: NoteInput): Note,
        updateNote(_id: ID!, input: NoteInput): Note,
        deleteNote(_id: ID!): Note
    }
`;


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = schema;    