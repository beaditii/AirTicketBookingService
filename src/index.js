const express = require('express');
const bodyParser = require('body-parser');
const app=express();
const {PORT}=require('./config/serverConfig');

const apiRoutes=require('./routes/index');
const db=require('./model/index');
const setupAndStartServer =()=>{
     app.use(bodyparser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.use('/api',apiRoutes);
    
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)

    if(process.env.DB.SYNC){
        db.sequelize.sync({alter:true});
    }
});
}

setupAndStartServer();