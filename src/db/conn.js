const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Sanket:Sanket123@mycluster1.o7dij.mongodb.net/Lpage?retryWrites=true&w=majority',
    {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useCreateIndex:true
    }
 ).then(()=>{
        console.log("Connection success");
     }).catch((e)=>
     {console.log("No connection");
    })