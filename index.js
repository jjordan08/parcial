const express = require ('express');
const appServer = express();

const myUser = require ('./models/user');

appServer.use(express.json());

var listUsers = []

appServer.listen (3000, ()=>{
    console.log('SERVER IS RUNNING ON PORT 3000');
});
