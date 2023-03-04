import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser ($username: String!, $email: String!, $password: String! ) {
        caddUser(username: $username, email: $email, password: $password){
            token{
                User{
                    _id
                    username
                    email
                    bookcount
                    savedbooks
                }
            }
           
        }
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook ($bookId: ID!, $book: String!) {
        addBook (bookId: $bookId, book: $book){
            bookID
            authors
            description
            title
            image
            link
        }
    }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($book: String!) {
    removeBook(book: $book){
        bookID
            authors
            description
            title
            image
            link
    }
  }

`