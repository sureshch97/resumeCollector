const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');


const mongoDB=async ()=>{

    try {
        
        await mongoose.connect(db ,{

            useNewUrlParser:true,
            useUnifiedTopology: true,
            useCreateIndex:true,
            useFindAndModify:false,

            

        }) ;
        console.log('mongoDB is Connected')


    } catch (error) {
        console.log(error.message)
        
    }
};
module.exports = mongoDB