const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const appp = express()
appp.use(express.json())
appp.use(express.urlencoded({ extended: true }))
appp.use(cors())


appp.get("/",cors(),(req,res)=>{

})

appp.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }
    }
    catch(e){
       res.json("norexist")
    }
})


appp.post("/Signup",async(req,res)=>{
    const{email,password}=req.body

    const data={
        email:email,
        password:password
    }

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }
    }
    catch(e){
       res.json("notexist")
    }
})
appp.post("/Internalevent",async(req,res)=>{
    const{email}=req.body
    const{password}=req.body
    const{fsn}=req.body
    const{fsl}=req.body
    const{rol}=req.body
    const{phn}=req.body
    const{evn}=req.body
    const{dpn}=req.body
    const{sems}=req.body
    const{evco}=req.body
    const{evorg}=req.body
    const{fdat}=req.body
    const{toda}=req.body
    const{purs}=req.body

    const data={
        email:email,
        password:password,
        fsn:fsn,
        fsl:fsl,
        rol:rol,
        phn:phn,
        evn:evn,
        dpn:dpn,
        sems:sems,
        evco:evco,
        evorg:evorg,
        fdat:fdat,
        toda:toda,
        purs:purs
    }

    await collection.insertMany([data])
        
})
appp.listen(8000,()=>{
    console.log("port connected")
})