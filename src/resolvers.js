import {
    users,
    posts,
    comments
} from './models/demoData'
const uuidv4 = require('uuid/v4');
//Resolves
const resolvers = {
    //Queries
    Query: {

        users(parent, args, ctx, info) {
            if (!args.query) {
                return users
            }
            return users.filter((user) => {
                return user.name.toLocaleLowerCase().includes(args.query.toLocaleLowerCase());
            });
        },
        posts(parent, args, ctx, info) {
            if (!args.query) {
                return posts
            }
            return posts.filter((post) => {
                const isTitle = post.title.toLocaleLowerCase().includes(args.query.toLocaleLowerCase());
                const isBody = post.body.toLocaleLowerCase().includes(args.query.toLocaleLowerCase());
                return isTitle || isBody
            });
        },
        comments(parent, args, ctx, info) {
            if (!args.query) {
                return comments
            }
        }
    },

    // Mutation
    Mutation: {
        createUser(parent, args, ctx, info) {
            const emailTaken = users.some((user) => user.email === args.data.email);
            if (emailTaken) {
                throw new Error('Email taken, please try to use another email address');
            }
            const user = {
                id: uuidv4(),
                ...args.data
            }

            users.push(user);

            return user
        },
        createPost(parent, args, ctx, info) {
            const userID = users.some((user) => user.id === args.data.author)
            if (!userID) {
                throw new Error('user not exists')
            }
            const post = {
                id: uuidv4(),
                ...args.data
            }
            posts.push(post)

            return post

        },
        createComment(parent, args, ctx, info) {
            const userID = users.some((user) => user.id === args.data.author)
            const postExists = posts.some((post) => {
                return post.id === args.data.post && post.published
            })

            if (!userID) {
                throw new Error('user not exists')
            }
            if (!postExists) {
                throw new Error('post not found or not published')
            }

            const comment = {
                id: uuidv4(),
                ...args.data
            }
            comments.push(comment)

            return comment

        }
    },

    //Reationships between types
    Post: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.post === parent.id
            })
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter((post) => {
                return post.author === parent.id
            })
        },
        comments(parent, args, ctx, info) {
            return comments.filter((comment) => {
                return comment.author === parent.id
            })
        }
    },
    Comment: {
        author(parent, args, ctx, info) {
            return users.find((user) => {
                return user.id === parent.author
            })
        },
        post(parent, args, ctx, info) {
            return posts.find((post) => {
                return post.id === parent.post
            });
        }
    },
}
export {
    resolvers
}