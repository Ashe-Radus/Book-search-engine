// define the query and mutation functionality to work with the mongoose models

const { Book, User, Auth } = require('../models');

const resolvers = {
    Query: {
        Book: async () => {
            return Book.find({});
        },
        User: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return User.find(params);            
        },
        Auth: async () => {
            return Auth.find({});
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await user.create(args);
            return user;
        },
        createBook: async (parent, args) => {
            const book = await book.create(args);
            return book;
        },
        createAuth: async (parent, args) => {
            const auth = await auth.create(args);
            return auth;
        },
    },
};

module.exports = resolvers; 