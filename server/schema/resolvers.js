// define the query and mutation functionality to work with the mongoose models

const { Book, User } = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        Book: async () => {
            return Book.find();
        },
        User: async (parent, {_id}) => {
            const params = _id ? {_id} : {};
            return User.find(params);            
        },
        me: async(parent, args, context) =>{
            if (context.user) {
                return User.findOne({ _id: context.user._id});
            }
            throw new AuthenticationError(' You need to be logged in');
        },
    },
    
    Mutation: {
        addUser: async (parent, { name, email, password}) => {
            const user = await user.create({ name, email, password });
            const token = signToken(user);
            return user;
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email }):
            if (!User) {
                throw new AuthenticationError('No user with this email');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('incorrect Password');
            }

            const token = signToken(user);
            return { token, user };
        },

        saveBook: async (parent, { bookId, Book }, context) => {
            if (context.user) {
                return Book.findOneAndUpdate(
                    {_id: bookId },
                    {
                        $addToSet: { Book: Book },
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );
            }
            throw new AuthenticationError('You need to be logged in');
        },
        removeBook: async (parent, { Book }, context) => {
            if (context.user) {
                return Book.findOneAndUpdate(
                    {_id: context.user._id},
                    {$pull: { book: book } },
                    { new: true }
                );
            }
            throw new AuthenticationError ('you need to be logged in');
        },
       
    },
};

module.exports = resolvers; 