import { gql } from '@apollo/client';

export const CREATEUSER = gql`
    mutation createUser () {
        createUser{
            _id
            username
            email
            bookcount
            savedbooks
        }
    }
`;

export const CREATEBOOK = gql`
    mutation createBook () {
        createBook{
            bookID
            authors
            description
            title
            image
            link
        }
    }
`;

export const CREATEAUTH = gql`
    mutation createAuth () {
        createAuth {
            token
            user
        }
    }
`;