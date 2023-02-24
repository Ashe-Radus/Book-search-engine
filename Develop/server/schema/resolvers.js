// define the query and mutation functionality to work with the mongoose models

const { Book, User } = require('../models');

const resolvers = {
    Query: {
        Book: async () => {
            return Book.find({});
        },
        User: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return User.find(params);            
        },
    },
    Mutation: {
        createUser: async (parent, args) => {
            const user = await user.create(args);
            return user;
        },
    },
};

module.exports = resolvers; 