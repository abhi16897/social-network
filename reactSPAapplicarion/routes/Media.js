const express=require("express")
const posts=express.Router()
const cors=require('cors')
const multer=require('multer')
const path=require('path')
//const FormData=require('form-data')
const postinsert=require('../models/MediaUpload')

const storage =multer.diskStorage({
    destination:'./images',
    filename:(req,file,cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}_${path.extname(file.originalname)}`)
    }
})
const upload=multer({
    storage:storage
})
posts.use(cors())

posts.post('/uploadmedia',upload.single('image'),(req,res)=>{
    console.log(req.file)
    const mediaDetail={
        caption:req.body.caption,
        description:req.body.description,
        username:req.body.username,
        image:req.file.filename,
        upload_date:Date.now(),
        likes:req.body.likes
    }
    postinsert.create(mediaDetail).then(()=>{
        res.send('Media Uploaded')
    })
})
posts.post('/retrievemedia',upload.single('image'),(req,res)=>{

    postinsert.findAll({
        where:{
            username:req.body.username
        }
    }).then(poasters=>{
      // console.log(poasters)
        res.send(poasters)
        
    })
})
module.exports=posts