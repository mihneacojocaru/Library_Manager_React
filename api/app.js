const express = require('express');
const cors = require('cors');
const {sequelize} = require('./models');

const appRoute = require('./routes/appRoute.js');

const app = express();
const port = 3333;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

app.use('/db/v1/bookStore',appRoute);

app.use((errMsg,req,res,next)=>{
    const err=new Error(errMsg);
    err.status=404;
    next(err);
});

app.use((errMsg,req,res,next)=>{
    res.status(errMsg.status || 500);
    res.json({
        error:{
            message:errMsg.message
        }
    })
});

app.listen({port}, async () => {
    console.log(`Server up on http://localhost:${port}/`);
    await sequelize.sync();
    //await sequelize.sync({ force: true });
    console.log('Database Conected!');
});

