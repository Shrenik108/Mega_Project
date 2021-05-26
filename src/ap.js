const express = require("express");
const path= require("path");
const app =  express();
 const hbs= require("hbs");
require("./db/conn");





 const Register= require("./models/registers");

const port= process.env.PORT || 3000 ;

const static_path =path.join(__dirname,"../public");

 app.use(express.json())
 app.use(express.urlencoded({extended:false}));
 
 const template_path =path.join(__dirname,"../templates/views");
 const partials_path =path.join(__dirname,"../templates/partials")
app.use(express.static(static_path));


app.use('views',express.static(template_path));

app.set("view engine","hbs");
 app.set("views",template_path);

 hbs.registerPartials(partials_path);
 

app.get("/",(req,res)=>{
     res.render("index")
  
 });
 
 app.get("/next_to_photo",(req,res)=>{
    res.render("next_to_photo")
 
});

var email="";
// app.post("/takeimg",async(req,res)=>{


//     try{

//         const registernewEmployee= new Register({
      
//             username:req.body.unml,
//             password:req.body.psdl
       
    
//         });
//         const registered =await registernewEmployee.save();
//         res.status(201).render("takeimg");

//     }
//    catch(error){
//        res.status(400).send(error);

//    }
    
 
// });
//////////*****************************************************************************////////////
app.post("/t",async (req,res)=>{
    try {
        
         email=req.body.unml;
        // console.log(email);
        const password=req.body.psdl;
      
       const useremail=await Register.findOne({username:email});

       if(useremail.password===password)
       {   
           res.status(201).render("takeimg");
       }
       else
       {
            //res.status(404).send("invalid credentials");
            res.render("index");
              
                
            }
            
        }

      
     catch (error) {
     // res.status(400).send("in catch")
    res.status(400).render("index")
   
    }
 });
//////////*****************************************************************************///////////
app.post("/xyz",async(req,res)=>{


    try{

        // const registernewEmployee= new Register({
      
        //     username:"yyy",
        // password:"999",
        // img:req.body.f
       
        const us=await Register.updateOne({username:email},{$push:{Refimg:req.body.f}})

       



        
       // });
        // const registered =await registernewEmployee.save();
        
    }
   catch(error){
       res.status(400).send(error);

   }
    
 
});

//////////*****************************************************************************///////////
app.post("/pqr",async(req,res)=>{


    try{

        // const registernewEmployee= new Register({
      
        //     username:"yyy",
        // password:"999",
        // img:req.body.f
       
        const us=await Register.updateOne({username:email},{$push:{Allimg:req.body.ff}})

       



        
       // });
        // const registered =await registernewEmployee.save();
        
    }
   catch(error){
       res.status(400).send(error);

   }
    
 
});

//////////*****************************************************************************///////////
 
app.listen(port,()=>{
    console.log(`Server is running at port no ${port}`);
}
)

