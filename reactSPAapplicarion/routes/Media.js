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
        title:req.body.title,
        caption:req.body.caption,
        description:req.body.description,
        username:req.body.username,
        image:'http://localhost:5000/profile/'+req.file.filename,
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
posts.delete('/deleteitem/:post_id',upload.single('image'),(req,res)=>{
    postinsert.destroy({
        where:{post_id:req.params.post_id}
    }).then(num=>{
        if(num==1){
            res.send('Deleted Sucsessfully')
        }else{
            res.send('Unable to delete y')
        }
    }).catch(err=>{
        res.status(500).send('Unable to delete This post ! Please try Again')
    })
})
module.exports=posts