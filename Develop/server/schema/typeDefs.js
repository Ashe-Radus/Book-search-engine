// define the necessary query and mutation types

// Query type 
//me: which returns a user type

//mutation type
//login:: accepts an email and password as paramaters; returns and auth type
// add user:: accepts a username, email, and password as parameters, returns an auth type
// savebook:: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a `User` type. (Look into creating what's known as an `input` type to handle all of these parameters
//removeBook:: Accepts a book's `bookId` as a parameter; returns a `User` type.

//user type: id, username, email, book count, saved books

//book type:: book id, authors, description, title, image, link, 

//auth type:: token,, user

const { gql } = require('apollo-server-express');

const typeDefs = gql `
    type User {
        _id: ID!
        username: String!
        email: String!
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
    }

    type Mutation {
        createUser(username: String!,  email: String!, bookcount: Int,     savedbooks: String! ): User
        createBook : Book
        createAuth: Auth
    }

`;

module.exports = typeDefs; 