const mongoose =  require('mongoose')

mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then( ()=>{
    console.log('connected');
})
.catch( ()=>{
    console.log('error');
})

const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, fsn:{
        type:String,
        required:true
    },
    fsl: {
        type: String,
        required: true
    },
    rol: {
        type: String,
        required: true
    },
    phn: {
        type: String,
        required: true
    },
    evn: {
        type: String,
        required: true
    },
    dpn: {
        type: String,
        required: true
    },
    sems: {
        type: String,
        required: true
    },
    evco: {
        type: String,
    },
    evorg: {
        type: String,
        
    },
    fdat: {
        type: String,
        required: true
    },
    toda: {
        type: String,
        required: true
    },
    purs: {
        type: String,
        required: true
    }
})

const collections = new mongoose.model("collections",LoginSchema)

//data={
   // email:"onduty@gmail.com",
  // password:"onduty123"
//}

//userdatas.insertMany([data])
module.exports = collections;




