const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        bookcount: Int
        savedbooks: String!
    }

    type Book {
        bookID: ID!
        authors: String!
        description: String!
        title: String!
        image: jpeg
        link: String!
    }

    type Auth {
        token: Int
        user: String!
    }

    type Query {
        book: [Book]
        user(_id: String): [User]
        auth: [Auth]
        me: User
    }

    type Mutation {
        addUser(username: String!,  email: String!, password: String!): Auth
        login(email: String!, password: String! ): Auth
        saveBook : Book
        removeBook: Book

    }

`;

module.exports = typeDefs; 