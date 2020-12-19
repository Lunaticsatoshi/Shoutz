const express = require('express') ;
const { ApolloServer } = require('apollo-server-express');

require('dotenv-safe').config();
const connectDB = require('./config/db');

const typeDefs = require('./graphql/typeDefs');

const main = async () => {
    const app = express();
    const resolvers = {
        Query: {
            hello: () => 'Hello World!!'
        }
    };
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    apolloServer.applyMiddleware({
        app,
        cors: false
    });

    connectDB();

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
        console.log(`Server started on PORT ${PORT}`);
    });
}

main().catch(err => console.log(err));