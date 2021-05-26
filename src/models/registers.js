const mongoose= require('mongoose');
var userSchema = new mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    username:String,
    password:String,
    
    Refimg: [{ 
        type: String 
      }],
      Allimg: [{ 
        type: String 
      }]
   
   
    
});
module.exports = mongoose.model('Login2',userSchema);