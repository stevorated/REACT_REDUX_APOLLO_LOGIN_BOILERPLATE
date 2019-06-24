import gql from 'graphql-tag'

export const UPLOAD_FILE_TEST = gql`
mutation ($file: Upload!, $size: String!) {
  singleUpload (file: $file, size: $size) {
    url
  }
}
`


export const DELETE_POST_MUT = gql`
mutation ($post: ID!) {
  deletePost (post: $post)
}

`

export const CREATE_POST_MUT = gql`
    mutation (
	$body: String!
) {
  createPost (body: $body) {
    id
    body
    createdAt
    createdBy {
      id
      fname
      lname
      username
      email
      avatar {
        url
      }
      posts {
        id
      }
    }
    comments {
      id
      body
      createdAt
      createdBy {
        fname
        lname
      }
      post {
        id
      }
    }
  }
}
`

export const CREATE_COMMENT_MUT = gql`
  mutation (
  $post: String!,
	$body: String!
) {
  createComment (
    body: $body,
    post: $post
  ) {
		id
    body
    post {
      id
    }
    createdAt
    createdBy {
      id
      fname
      lname
      avatar {
        url
      }
    }
  }
}
`

export const REGISTER_USER_MUT = gql`
 mutation ($fname: String!, $lname: String!, $username: String!, $email: String!, $password: String!) {
  signUp (
    fname: $fname,
    lname: $lname,
    username: $username,
    email: $email,
    password: $password
  ) {
    id
    email
    fname
    lname
    username
  }
}
`

export const LOGIN_USER_MUT = gql`
 mutation ($email: String!, $password: String!) {
  signIn (
    email: $email,
    password: $password
  ) {
    id
    email
    fname
    lname
    username
    avatar {
      url
    }
    posts {
      id
    }
  }
}
`
export const LOGOUT_USER = gql`
  mutation {
    signOut
  }
`