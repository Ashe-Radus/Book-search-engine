import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user {
        user {
            _id
            username
            email
            bookcount
            savedbooks
        }
    }
    `;

export const QUERY_BOOK = gql`
    query book {
        book{
            bookID
            authors
            description
            title
            image
            link
        }
    }    
    `;

export const QUERY_AUTH = gql`
    query auth {
        auth{
            token
            user
        }
    }
    `;