# Graphql basics

Use `npm install` to install all dependencies form package.json.

Use `npm start` to  start the server on localhost:4000.

##### Some basic Graphql commands are:

* To fetch all users details
```
query {
  users{
    id
    name
    email
    age
  }
}
```
* To fetch all posts with:
     - relative comments
     - author details of the comment
     - author details of the post
     - published or not
```
query {
  posts {
    id
    title
    body
    comments{
      id
      text
      author{
        id
        name
      }
    }
    author {
      id
      name
    }
    published
  }
} 
```
* To create users using **Mutation**
```
mutation {
  createUser (
    data:{
    name:"Faisal",
    email:"test2@example.com",
    age: 34
    }
  ){
    id
    name
    email
    age
  }
}
```
* To delete user using **Mutation**
```
mutation {
  deleteUser(id:"2"){
    id
    name
    email
  }
}
```
* To create posts using **Mutation**
```
mutation {
  createPost(
    data:{
    title:"new post 1", 
    body:"this is a new post from mutation",
    published:true,
    author:"1"
    }
  ){
    id
    title
    body
    published
  }
}
```
* To create comments using **Mutation**
```
mutation{
  createComment(
    data:{
      text: "this is a comment for the post #1",
      author:"3",
      post:"3"
    }
  ){
    id
    text
  }
}
```
And i will keep the rest of queries for you :sunglasses::thumbsup::thumbsup::thumbsup:

Good Luck:v::v::v: