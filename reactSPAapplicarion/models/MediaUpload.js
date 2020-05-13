const Sequelize=require("sequelize")
const db=require("../database/db")
module.exports=db.sequelize.define(
    'posters',
    {
        post_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        title:{
            type:Sequelize.STRING
        },
        caption:{
            type:Sequelize.STRING
        },
        username:{
            type:Sequelize.STRING
        },
        image:{
            type: Sequelize.BLOB('long')
        },
        upload_date:{
            type:Sequelize.DATE
        },
        description:{
            type:Sequelize.STRING
        },
        likes:{
            type:Sequelize.INTEGER
        }
    },
    {
        timestamps:false
    }
)